const path = require("path");
const fs=require("fs");
// rename
const {v4:uuid}=require("uuid");

const dirCodes=path.join(__dirname,"codes");
// not necessarily folder 'codes' exist
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true});
};
const generateFile=async(format,code)=>{
    const jobid = uuid();
    const filename=`${jobid}.${format}`;
    const filePath = path.join(dirCodes,filename);

    await fs.writeFileSync(filePath,code);
    return filePath;
}

module.exports={
    generateFile
};