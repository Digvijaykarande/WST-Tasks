const fs=require('fs');
fs.readFile("users.json",(e,d)=>{
console.log(JSON.parse(d));
});
