/*
1.Named function
2.Anonymous function:<without a name>
    ->a function can be assigned to variable
    ->a variable can reference a function
*/

function circleArea(r){
    return 3.142 * r * r;}

/*
1.create a function of your choice use named function
2.assign that function a variable
3.directly create equate your variable to the
function defination
4.removw the original function
5.try calling the variable and try calling the original
function.
6.remove the name of the function, since it useless
7.Anonymous function<function without a name>
*/

//step1
function multiply (a,b){
    return a * b;
}
console.log(multiply);
console.log(multiply(4,5));

//step2
let multi = multiply;
console.log(multi);
console.log(multi(4,5));

//step3
let multiFunc = function multiply(a,b){
    return a * b
}
console.log(multiFunc);
console.log(multiFunc(4,5));


//step4
multiply = undefined;
console.log(multiply);

//step5
console.log(multi);
console.log(multi(4,5));

//Arrow function
/*
1.create an anonymous function
2.remove th function keyword
3.between () <> {}put an arrow
4.good practice to have the variable as a const
*/

//step1
let add = function(a, b) {
    return a + b;
};







