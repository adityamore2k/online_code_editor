const {exec} = require("child_process");
const  fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname,"outputs")
if(!fs.existsSync(outputPath)){
fs.mkdirSync(outputPath,{recursive:true})
}
const executePython = (filepath)=>{
    const jobid = path.basename(filepath);
return new Promise((resolve,reject)=>{
    exec(`python ${jobid}`,
    (error,stdout,stderr)=>{
        error && reject({error,stderr});
        stderr && reject(stderr);
        resolve(stdout);
    });
})}

module.exports={
    executePython
}