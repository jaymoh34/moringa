/*
->A function that takes one or more parameters as function
  *one of or more of the parameters are functions
*/

/*
Task:
-create a function that prints on alert for the current time.
-does not take any parameters
-prints alert,console.log-> current times stamp
-test your function by calling it
*/

//Named function
function showCurrentTime() {
const currentTime = new Date();
    console.log(`current Time is ${currentTime}`);
    alert(`current Time is ${currentTime}`);
  }
showCurrentTime()

//setInterval(showCurrentTime,8000)

/*
1Named function
2.anonymous function <remove the named function>
3.Arrow function
->pass all functions by reference
*/

//Anonymous function
setInterval(function () {
 const currentTime = new Date();
   console.log(`current Time is ${currentTime}`);
  alert(`current Time is ${currentTime}`)},8000);


//Arrow function
  setInterval(() =>{
   const currentTime = new Date();
    console.log(`current Time is ${currentTime}`);
    alert(`current Time is ${currentTime}`)
  },8000)

  //How to stop set interval
   let k =0
   let invT= setInterval(() =>{
    if (k >=5){
      clearInterval(invT);
      return;
    }
    const currentTime = new Date();
    console.log(`current Time is ${currentTime}`);
    k = k + 1;
    console.log("k is", k)
    alert(`current Time is ${currentTime}`)
  },8000)
 clearInterval(invT)// stop the interval immediately