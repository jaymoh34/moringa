/*
1. declare variable name in the global scope.
2. create function call sayMyName
   console.log("the name and line number")
   -remember to call the function
3. declare variable name inside the function.
   at the start
   assign it a different name. print out the name
   and line number
4. create an if statement: inside the function pass a truthy
   condition of your choice.
   inside the block console.log name
   and its line number
5. inside the first if statement at the start
   declare variable name give it a new name.
   console.log name and line number.
6. inside the function after the if block
   console.log name and line number.
7. Try declaring the same variable name
   in the same scope.
*/

let name = "James"

function sayMyName(){
    let name = "Kipleting"
    console.log(`Name ${name} Line ${26}`);

console.log(`Name ${name} Line ${28}`)
if(true){
    let name = "Sang"
    console.log(`Name ${name} Line ${31}`)
}
console.log(`Name ${name} Line ${33}`)
}
sayMyName();