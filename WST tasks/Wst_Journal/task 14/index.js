const fs=require('fs');
fs.readFile("user.json",(err,data)=>{
console.log(JSON.parse(data));
});
