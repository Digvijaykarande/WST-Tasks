const fs=require('fs');
fs.writeFileSync("users.json",JSON.stringify([{name:"A"},{name:"B"}]));
fs.readFile("users.json",(err,data)=>{
console.log(JSON.parse(data));
});
