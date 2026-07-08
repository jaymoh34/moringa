/*
Loops: run a block of code over and over again 
you should not loop <infinity>:but
an exit condition
syntax:
    while(<condition>){
        //code to run while condition is true
    }
*/

//count to 100
let n = 0;
let condition = true;
//condition=> falsey: we automatically exit the loop
while(condition){
    console.log("n is", n);
    n = n + 1;
    if(n > 100){
        condition = false;
    }
}

/*
Create a function (any name)
The function should take a parameter
@param is a number greater than 0
Have a loop inside that counts down from this number
Use while loop. It should print n:
*/

function countDown(n) {
    while (n > 0) {
        console.log("n:", n);
        n--;
    }
    console.log(" Countdown ");
}
countDown(5);

/*
Options you have:
1. Put condition directly in your while loop (remove extra variable)
2. Put condition to true and use break statement (break exits the loop)
3. Since loop is inside function, exit the whole function using return statement

*/

/*
Create function1 (any name):
- No parameters
- Prompt user for first number (valid number > 1)
- Prompt user for second number (valid number > 1)
- Use recursion or while loop for validation
- After valid numbers, call function2 with the numbers

Create function2 (any name):
- Takes two parameters (number1, number2)
- Both must be > 1
- Create a multiplication table
- Example: function2(3,5)
  Output:
  3*5=15
  3*4=12
  3*3=9
  3*2=6
  3*1=3
  ---
  2*5=10
  2*4=8
  2*3=6
  2*2=4
  2*1=2
  ---
  1*5=5
  1*4=4
  1*3=3
  1*2=2
  1*1=1
*/



function getNumbers() {
    let number1;
    let number2;

    // Get first number
    while (true) {
        let input = prompt("Enter first number (greater than 1):");
        number1 = Number(input);
        
        if (!isNaN(number1) && number1 > 1) {
            break; // Valid! Now this break is correctly inside a loop
        }
        alert("Invalid input! Please enter a number greater than 1.");
    }

    // Get second number
    while (true) {
        let input = prompt("Enter second number (greater than 1):");
        number2 = Number(input);

        if (!isNaN(number2) && number2 > 1) {
            break; // Valid! Correctly inside a loop
        }
        alert("Invalid input! Please enter a number greater than 1.");
    }

    // Call the table function with the valid numbers
    generateMultiplicationTable(number1, number2);
}

function generateMultiplicationTable(num1, num2) {
    // Validate inputs
    if (!num1 || num1 <= 0 || !num2 || num2 <= 0) {
        console.error("Ensure number1 and number2 are numbers greater than 0");
        return;
    }

    console.log(`Numbers: ${num1} and ${num2}`); // Fixed template literal string

    let outerLoop = num1;
    while (outerLoop > 0) {
        let innerLoop = num2;
        while (innerLoop > 0) {
            console.log(`${outerLoop} x ${innerLoop} = ${outerLoop * innerLoop}`);
            innerLoop = innerLoop - 1;
        }
        
        if (outerLoop > 1) {
           
        }
        outerLoop = outerLoop - 1;
    }
}

getNumbers();


//second example
// FUNCTION 1: Get Numbers from User
function promptStudent() {
    let num1 = null;
    let num2 = null;
    
    while (true) {
        // Get first number
        num1 = prompt("Enter the first number (greater than 0):");
        
        // Check if user cancelled
        if (num1 === null) {
            console.log("❌ Input cancelled!");
            return;
        }
        
        // Check if it's a valid number
        if (isNaN(num1) || num1.trim() === "") {
            alert("❌ Invalid input! Please enter a number.");
            continue; // Restart the loop
        }
        
        // Get second number
        num2 = prompt("Enter the second number (greater than 0):");
        
        // Check if user cancelled
        if (num2 === null) {
            console.log("❌ Input cancelled!");
            return;
        }
        
        // Check if it's a valid number
        if (isNaN(num2) || num2.trim() === "") {
            alert("❌ Invalid input! Please enter a number.");
            continue; // Restart the loop
        }
        
        // Convert to numbers
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        
        // Check if numbers are greater than 0
        if (num1 <= 0 || num2 <= 0) {
            alert("❌ Numbers must be greater than 0!");
            continue; // Restart the loop
        }
        
        break; // Valid numbers entered, exit loop
    }
    
    console.log(`✅ Got valid numbers: ${num1} and ${num2}`);
    mathTable(num1, num2);
}

// FUNCTION 2: Generate Multiplication Table
function mathTable(num1, num2) {
    // Validate parameters
    if (!num1 || num1 <= 0 || !num2 || num2 <= 0) {
        console.error("❌ Error: Both numbers must be greater than 0!");
        return;
    }
    
    console.log("\n" + "=".repeat(50));
    console.log(` ${num1} * ${num2}`);
    
    
    let outerLoop = num1;
    
    while (outerLoop > 0) {
        doInnerLoop(outerLoop, num2);
        if (outerLoop > 1) {
            console.log("  " + "-".repeat(25));
        }
        outerLoop = outerLoop - 1;
    }
    
    console.log("\n" + "=".repeat(50));
    console.log("✅ Table generated successfully!");
   
}

// FUNCTION 3: Print Inner Loop (Helper)
function doInnerLoop(outerLoop, num2) {
    let innerLoop = num2;
    
    while (innerLoop > 0) {
        // FIXED: Proper template literal
        console.log(`  ${outerLoop} × ${innerLoop} = ${outerLoop * innerLoop}`);
        innerLoop = innerLoop - 1;
    }
}

// Start the program
promptStudent();