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