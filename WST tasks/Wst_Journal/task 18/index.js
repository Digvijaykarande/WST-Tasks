let students=[{name:"A",marks:80},{name:"B",marks:90}];
function getAllStudents(){return students;}
function getStudentByName(n){return students.find(s=>s.name==n);}
function getAverageMarks(){
return students.reduce((a,b)=>a+b.marks,0)/students.length;
}
console.log(getAllStudents());
console.log(getStudentByName("A"));
console.log(getAverageMarks());
