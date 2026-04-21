const fs=require('fs');
let d=JSON.parse(fs.readFileSync("users.json"));
console.log(d);
