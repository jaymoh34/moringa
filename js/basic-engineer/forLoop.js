/*
/*
---> for Loop-> mostly meant for numbers
-- combination of using while for number
Loops: 1:start point, 2:condition , 3:after each iteration
combines it into one statement
for(startpoint; condition; each-iteration){
}
*/

// WHILE LOOP
let k = 0; // starting point

// condition: k < 20
while (k < 20) {
    console.log("k", k);
    k = k + 1; // after each iteration
}

// FOR LOOP (Same as while loop above)
for (let k = 0; k < 20; k = k + 1) {
    console.log("k", k);
}

/*
Kindergarten teacher wants to generate a maths table for the student. This table is dynamic.

Create a function @function1 (give it any name).
    It does not take any parameters.
    This function:
    1. Prompts a user for the first number.
       Check if number is a valid number greater than 1.
    2. Prompts a user for the second number.
       Check if number is a valid number greater than 1.
    Use recursion or a while loop to ensure the user enters a correct number for number1 and number2.
    After the number is entered, call @function2 which takes the numbers as parameters.
    Example: @function2(number1, number2)

Create a function @function2 (give it any name).
    This function takes in the following parameters:
    @param1: number greater than 1.
    @param2: number greater than 1.
    Check if @param1 is a number greater than 1.
    Check if @param2 is a number greater than 1.
    Example: if @function2(3,5)
    Create a maths table for it up to 1.
    Console logs should display:
    ---
    3*5=
    3*4=
    3*3=
    3*2=
    3*1=
    ---
    2*5=
    2*4=
    2*3=
    2*2=
    2*1=
    ---
    1*5=
    1*4=
    1*3=
    1*2=
    1*1=
*/

function promptStudent() {
    let num1 = null;
    let num2 = null;
    
    while (true) {
        num1 = prompt("Enter the first number");
        if (isNaN(num1)) {
            alert("Invalid! Enter a number.");  
            continue;
        }
        num2 = prompt("Enter the second number");
        if (isNaN(num2)) {
            alert("Invalid! Enter a number.");  
            continue;
        }
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        if (num1 <= 0 || num2 <= 0) {
            alert("Numbers must be greater than 0!");  
            continue;
        }
        break;
    }
    console.log("Got valid number", num1, num2);
    mathTable(num1, num2);
}

function mathTable(num1, num2) {
    if (!num1 || num1 < 0 || num2 < 0) {
        alert("Numbers must be greater than 0!");  
        console.error("Ensure number1 or number2 are numbers greater than 0");
        return;
    }

    for (let i = num1; i >= 1; i--) {
        for (let j = num2; j >= 1; j--) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
        if (i > 1) console.log("---");
    }
    
}

promptStudent();
