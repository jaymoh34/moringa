/*
Functions allow you to write reusable bits of code
To use DRy(Do not repeat your self) by using code blocl

/{/ code block/}/
syntax:
function<name:variable name convectiom>v(<parameters>){
/code block/
}

//B ig rule;
-> a function executes only when called
-> calling a function is telling the 
   function to do its work 
*/
/*
Create a simple function that 
when you call it it alerts
you on th current time.
*/

function timeAlert() {
    const date = new Date();
    alert(`time stamp: ${date.toLocaleString("en-KE",{
        timeZone: "Africa/Nairobi",
    })}`);
}
/*
call a function use the function name then

()-> brackets
*/
timeAlert();//calling a function

/*
Area of a triangle
0.5 * B * W
*/
//base=undefined , height=undefined
function areaOfTriangle(base, height){
  console.log(`base is ${base} its type ${typeof base}`);
  console.log(`height is ${height} its type ${typeof height}`);
  const area = 0.5 * base * height;
  console.log(
    `For triangle with base ${base} and height ${height} area is ${area}`,
);
}

/*
Scenario 1:
call the areaOfTriangle function dont paa any arguments.<>
areaOfTriangle()
Scenario 2:
call the function pass base of 20 and no width
areaOfTriangle(20) // output
Scenario 3:
call the funtion pass base of 20 and height of 39
areaOfTriangle(20,30)
Scenario 4:
create a variable base1=50 and variable height1=60
areaOfTriangle(base1,height1)
Scenario 5:
create a variable base2="hello" and variable height2=true
areaOfTriangle(base2,height2)
*/


function areaOfTriangle(base, height) {
    console.log(`base is ${base} its type ${typeof base}`);
    console.log(`height is ${height} its type ${typeof height}`);
    const area = 0.5 * base * height;
    console.log(
        `For triangle with base ${base} and height ${height} area is ${area}`
    );
}

// Scenario 1: Call the function without passing any arguments
console.log("Scenario 1: No arguments");
areaOfTriangle();

// Scenario 2: Call the function pass base of 20 and no height
console.log("Scenario 2: Base only (20)");
areaOfTriangle(20);

// Scenario 3: Call the function pass base of 20 and height of 30
console.log("Scenario 3: Base 20, Height 30");
areaOfTriangle(20, 30);

// Scenario 4: Create variables base1=50 and height1=60
console.log("Scenario 4: Variables base1=50, height1=60");
let base1 = 50;
let height1 = 60;
areaOfTriangle(base1, height1);

// Scenario 5: Create variables base2="hello" and height2=true
console.log("Scenario 5: base2='hello', height2=true");
let base2 = "hello";
let height2 = true;
areaOfTriangle(base2, height2);








