/*
create a button.
1. attach a click event which shows an alert
2. attach a mouseover which console.log the current date
for each of the events print the event. ie console.log(event)
*/

// Get the button
const button = document.getElementById("myButton");

// 1. Click event - shows an alert
button.addEventListener("click", function(event) {
    console.log("Click Event:", event);
    alert("Button was clicked!");
});

// 2. Mouseover event - console.log the current date
button.addEventListener("mouseover", function(event) {
    console.log("Mouseover Event:", event);
    console.log("Current Date:", new Date().toString());
});

/*
We can attach an event to window<active tab>
for on mouseMove and print out the co-ordinates of the mouse.

have x and y coordinates being display on the screen when someone moves.
*/
window.addEventListener("mousemove", function(event) {
    // Get coordinates
    const x = event.clientX;
    const y = event.clientY;
    
    // Display on screen
    document.getElementById("xCoord").textContent = x;
    document.getElementById("yCoord").textContent = y;
    
    // Print to console
    console.log(`Mouse Position - X: ${x}, Y: ${y}`);
});