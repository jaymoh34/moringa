/*
code without a promise.
1. create a variable<any name> global variable
2. console.log the value of the variable.
3. create and call a function that modifies this variable
4. console.log( ) the value of the variable
*/

let flow = "This flow";
console.log("10:", flow);
function testfunc() {
  flow = "updated flow";
}
testfunc();
console.log("15:", flow);