/*
1.Named function
2.Anonymous function:<without a name>
    ->a function can be assigned to variable
    ->a variable can reference a function
*/

function circleArea(r){
    return 3.142 * r * r;
}

let age = 23;
let samsAge = age;
let ac = circleArea

console.log(ac);

