/*
 A recursive function is a fuction that calls itself.
 -> since this creates an endless loop you need to find a way
 to terminate.That is using a return statement and id<condition>  
*/

function salaryGrossPromptProcess() {
    let gross = prompt("Enter your gross salary");
    if (isNaN(gross) === false) {
        console.log(`You entered this amount ${gross} exiting`);
        return;
    }
    alert(
        `Invalid gross salary entered. enter a number for gross salary. try again`,
    );
    salaryGrossPromptProcess();
}
salaryGrossPromptProcess();

/*
1.remove the alert =>
2.initial prompt should be enter your gross salary
3.any prompt after that should be  `Invalid gross salary entered. enter a number for gross salary.try again`
*/

function salaryGrossPromptProcess(attempt = 0) {
    let gross = null;

    if (attempt === 0) {
        console.log("First prompt: Enter your gross salary"); // ← Add this
        gross = prompt("Enter your gross salary");
    } else {
        console.log(`Attempt ${attempt + 1}: Invalid input`); // ← Add this
        gross = prompt(
            `${attempt + 1}Invalid gross salary entered. enter a number for gross salary.try again`
        );
    }

    console.log(`User entered: ${gross}`); // ← Add this

    if (isNaN(gross) === false) {
        console.log(`You entered this amount ${gross} exiting`);
        return;
    } else {
        salaryGrossPromptProcess(attempt + 1);
    }
}
salaryGrossPromptProcess();

/*
Create a function to calculate the factorial of a number.
The function takes a parameter:
- @param1 which is a number and returns the factorial of the number
Example: factorial(5) output 120
// 5*4*3*2*1
// check the number entered is greater than 1
// hint: use a recursive function
*/

function factorial(n = 1, lastSolution = 1) {
    
    if (n <= 1) {
        return lastSolution;  
    }
    const newSolution = n * lastSolution;
    const newN = n - 1;
     return factorial(newN, newSolution);  
}
console.log("5! =", factorial(5));   
console.log("4! =", factorial(4));   
console.log("3! =", factorial(3));   
console.log("2! =", factorial(2));   
console.log("1! =", factorial(1));   
console.log("0! =", factorial(0));   

//call stack
function factorial(n) {
    if (n < 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); 