/*
DOM Access using
1.querySelector
2.documentGet<...>

1.getElemetById:
    -create a variable assign to the element with id<div1>
    -console.log this element :view in your browser
    -in browser  console yo should be able hover over the element

2.getElementByClass
    -create a variable assign to the DOM element with class<list item>
    console.log this element :view in your browser
    -in browser console you should be able hover the elements

3. querySelector:
    1. for the id: hint use # for id
    - create a variable assign to the dom element with id <div1>
    - console.log this element :view in your browser
    - in browser console you should be able hover over the element

    2. <use querySelector>for the class: hint use <.>
    - create a variable assign to the dom element with class <list-item>
    - console.log this element :view in your browser
    - in browser console you should be able hover over the element
    - Note you only get the first list item.


    3. <use querySelectorAll>for the class: hint use <.>
    - create a variable assign to the dom element with class <list-item>
    - console.log this element :view in your browser
    - in browser console you should be able hover over the element
    - Note you get the array.
    - use a for loop or while to go through the array elements
    and print each element.
*/

// 1. getElementById
const div1 = document.getElementById("div1");
console.log(div1);  
// 2. querySelector for ID
const div2 = document.querySelector("#div1");
console.log(div2);  

// 3. getElementsByClassName
const listOfItems = document.getElementsByClassName("list-item");
console.log(listOfItems);  

// 4. querySelector (first only)
const queryListOfItems = document.querySelector(".list-item");
console.log(queryListOfItems);  

// 5. querySelectorAll
const queryListOfAllItems = document.querySelectorAll(".list-item");
console.log(queryListOfAllItems);  

// 6. For loop
for (let i = 0; i < queryListOfAllItems.length; i++) {
    console.log(queryListOfAllItems[i]);  
}

/*
BUTTONS;
    1.original Content
    2.updating Content
    3.update the innerText
*/
function Original(){
    console.log("original clicked");
}

function ReplaceContent(){
    console.log("replace clicked");
}

function UpdateFruits(){
    console.log("update  fruits clicked")
}

/*
Update dom elements.
-innerHtml <replaces the html>
-innerText <replaces the innerText>
*/
const otherFruits = ["Kiwi", "Pineapple", "Dragon Fruit"];
const originalDiv = document.querySelector("#div1").innerHTML;

function Original() {
  console.log("original clicked");
  // Reset the div to its original value
  document.querySelector("#div1").innerHTML = originalDiv;
}

function ReplaceContent() {
  console.log("replace clicked");
  const newHtml = `<h3>List Chores</h3>
  <ul>
    <li class="list-item">Clean Bathroom</li>
    <li class="list-item">Clean Kitchen</li>
    <li class="list-item">Fetch Water</li>
  </ul>`;
  
  document.querySelector("#div1").innerHTML = newHtml;
}

function UpdateFruits() {
  console.log("update fruits clicked");
  // innerText, for loop
  const listItems = document.querySelectorAll(".list-item");
  
  // Use for loop to update each item with innerText
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerText = otherFruits[i];
  }
}



