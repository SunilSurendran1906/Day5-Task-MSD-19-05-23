 // 1.for the given JSON iterate over all for loops(for,for in,for out,forEach)

 // for loop in JSON :
 
 var player=[{
    "name":"Sunil",
    "age":22,
    "qulification":"B.E MECH",
    "yearOfpasing" : 2022
 }];
 for(i=0;i<player.length;i++){
    console.log(player[i]);
 }

// For in loop JSON :
var person = {
    "fname": "Nick",
    "lname": "Jonas",
    "age": 26
 }; 
 for (let x in person) {
    console.log(x + " : "+ person[x])
 }

// for of loop JSON :

let JSON=[{
   "name":"Sunil",
   "age":22,
   "qulification":"B.E MECH",
   "yearOfpasing" : 2022
}];
for(let element of JSON){
   console.log(element)
}
// forEach loop JSON :
let Each=[{
   "name":"Sunil",
   "age":22,
   "qulification":"B.E MECH",
   "yearOfpasing" : 2022,
   "skills":[" MRN Full Stack development","three month course"]
}];
Each.forEach(X => {
   console.log(X)
});
