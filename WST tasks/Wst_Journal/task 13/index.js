const fs=require('fs');
let data={name:"A",age:20,skills:["JS"]};
fs.writeFileSync("user.json",JSON.stringify(data));
