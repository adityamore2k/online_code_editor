const express = require("express");

const app = express();

const {generateFile}=require("./generateFile");
// we need to parse
const {executePython}=require("./executePython");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(5000,()=>{
    console.log("Listening on port 5000")
});
app.post("/run",async(req,res)=>{
    // ES6 feature
    const {language="cpp",code} = req.body;
    if(code===undefined){
        return res.status(400).json({success:false,error:"empty code body!"});
    }
    // console.log(req.body);

    // need to generate cpp file with content from request
    // run file
    // send response file

    try{
        const filepath = await generateFile(language,code);
        const output= await executePython(filepath);
        console.log(filepath,output);
        return res.json({filepath,output});
    }
    catch(err){
        res.status(500).json({err});
    }
});
app.get("/",(req,res)=>{
    return res.json({hello:"world!"});
});