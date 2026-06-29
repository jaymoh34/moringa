/*
1.exit code.
2.return any required data.
*/

//Scenario 1:leave it as it is and look at the results.
function sayMyName() {
    let first_name = "Samsom";//statement 1
    console.log(`First Name ${first_name}`);//statement 2
    let second_name = "Johnna";//statement 3
    console.log(`Second Name ${second_name}`);//statement 4
    let full_name = `${first_name} ${second_name}`;//statement 5
    console.log(`Names are ${full_name}`);//statement 6
}

let sayMyNameValue = sayMyName();
console.log(`Function returned ${sayMyNameValue}`);

//Scenario 2:put return inside the function after second statement
function sayMyName2() {
    let first_name = "Samsom";//statement 1
    console.log(`First Name ${first_name}`);//statement 2
    return;
    let second_name = "Johnna";//statement 3
    console.log(`Second Name ${second_name}`);//statement 4
    let full_name = `${first_name} ${second_name}`;//statement 5
    console.log(`Names are ${full_name}`);//statement 6
}

let result2 = sayMyName2();
console.log(`Function returned ${result2}`);

//Scenario 3:put return inside the function after fourth statement
function sayMyName3() {
    let first_name = "Samsom";//statement 1
    console.log(`First Name ${first_name}`);//statement 2
    let second_name = "Johnna";//statement 3
    console.log(`Second Name ${second_name}`);//statement 4
    return;
    let full_name = `${first_name} ${second_name}`;//statement 5
    console.log(`Names are ${full_name}`);//statement 6
}

let result3 = sayMyName3();
console.log(`Function returned ${result3}`);

//Scenario 4:put a return statement anywhere inside the function and return a string of your choice
function sayMyName4() {
    let first_name = "Samsom";//statement 1
    console.log(`First Name ${first_name}`);//statement 2
    let second_name = "Johnna";//statement 3
    console.log(`Second Name ${second_name}`);//statement 4
    return "Hello Wolrd";
    let full_name = `${first_name} ${second_name}`;//statement 5
    console.log(`Names are ${full_name}`);//statement 6
}

let result4 = sayMyName4();
console.log(`Function returned ${result4}`);

//Scenario 5:put a return statement anywhere inside the function and return a number of your choice
function sayMyName5() {
    let first_name = "Samsom";//statement 1
    console.log(`First Name ${first_name}`);//statement 2
    let second_name = "Johnna";//statement 3
    console.log(`Second Name ${second_name}`);//statement 4
    return 5242;
    let full_name = `${first_name} ${second_name}`;//statement 5
    console.log(`Names are ${full_name}`);//statement 6
}

let result5 = sayMyName5();
console.log(`Function returned ${result5}`);

//Scenario 6:put a return statement anywhere inside the function and return a boolean of your choice
function sayMyName6() {
    let first_name = "Samsom";//statement 1
    console.log(`First Name ${first_name}`);//statement 2
    let second_name = "Johnna";//statement 3
    console.log(`Second Name ${second_name}`);//statement 4
    return true;
    let full_name = `${first_name} ${second_name}`;//statement 5
    console.log(`Names are ${full_name}`);//statement 6
}

let result6 = sayMyName6();
console.log(`Function returned ${result6}`);
