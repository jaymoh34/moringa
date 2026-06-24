let age=Number(prompt("Enter your age:"))
console.log(`age is ${age} typeof ${typeof age}`)
alert(`You entered ${age}`)
//age=27
//27>10:true->

if (age > 50) {
    alert("You are an ancestor.");
} else if (age > 45) {
    alert("Best age for retirement");
} else if (age > 27) {
    alert("Best age for marriage");
} else if (age > 18) {
    alert("You can legally drink and smoke");
} else if (age > 13) {
    alert('You are a teen');
} else if (age > 10) {
    alert("You are a baby.");
} else {
    alert("You are a child under 10.");
}