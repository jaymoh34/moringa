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
    alert(`time stamp: ${date.toISOString()}`);
}
/*
call a function use the function name then

()-> brackets
*/
timeAlert();//calling a function

