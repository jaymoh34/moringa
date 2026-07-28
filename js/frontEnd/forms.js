/*
-------How to work with forms------
"onsubmit"=> default  you have to prevent default behaviour
             event attched to the form

"onclick"=>
*/

document.getElementById("form1").addEventListener("submit", submitForm); 
 
 document.getElementById("form1input1").addEventListener("input", (e) => { 
    //value 
    console.log(e.target.value); 
 }); 
 
 function submitForm(e) { 
    e.preventDefault(); 
    // //stop the form from making an auto submission 
    //submit. 
    // 
    const inputList = document.querySelector("#form1").querySelectorAll("input"); 
 
    const input1 = inputList[0]; 
    const input2 = inputList[1]; 
    console.log("input 1", input1.value); 
    console.log("input 2", input2.value); 
    console.log("f1 input1", document.getElementById("form1input1").value); 
    console.log("f1 input2", document.getElementById("form1input2").value); 
    input1.value = "Cats and dogs"; //update from this 
 }

/*
MINI EXERCISE
1. create a html form: atleast 2 inputs and a submit button
2. Attach the submit event listener.
3. Prevent form default behaviour
4. print out the values of your form inputs.
*/

// 2. Attach the submit event listener
document.getElementById("form1").addEventListener("submit", function(event) {
    
// 3. Prevent form default behaviour
event.preventDefault();
    
// 4. Print out the values of your form inputs
const name = document.getElementById("form1input1").value;
const email = document.getElementById("form1input2").value;
    
console.log("Name:", name);
console.log("Email:", email);
});

// DIV 2 click event
document.getElementById("div2").addEventListener("click", (e) => {
    console.log("DIV 2 clicked");
});

// BTN 2 click event with stopPropagation
document.getElementById("btn2").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("BTN 2 clicked");
});
