/*
Expression:
a piece of code that produce a value
x>5 => true or false
10+11=>21 value
circleArea(5) => expresssion function call
reference value->n1
*/

let x = 10;
console.log(x > 5);   
console.log(10 + 11); 
    
function circleArea(radius) {
    let pi = 3.14159;
   return pi * radius * radius;
}
console.log(circleArea(5)); 

function sayMyName() {
    console.log("Sam Mwangi");
}

let n1 = 23;  
console.log(n1);  
console.log(n1 > 10);
console.log(sayMyName());

