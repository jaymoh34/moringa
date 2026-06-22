/*
Comparison operators evaluate to only true or false
 1.Equality ==
 2.Strict Equality ===
 3.Inequality !=
 4.Strict Inequality !==
 --JS--
*/

let numb1="23"
let numb2=23
//string===number => false
//numb1==numb2 ->type conversion
let StrictEqual=numb1===numb2 //Boolean
console.log(`numb1=${numb1}===numb2=${numb2}
    Ans ${StrictEqual} its type is ${typeof StrictEqual}`)
    let nonStrictEquality=numb1==numb2
    console.log(`numb1=${numb1}==numb2=${numb2}
        Ans ${nonStrictEquality} its type is ${typeof nonStrictEquality}`)
    


         let val1="30"
         let val2=30
         //different types should be equal
         //string is not equal number -> true
         let StrictInequality=val1!==val2
         console.log(`val1=${val1}!==val2=${val2}
            Ans ${StrictInequality} its type is ${typeof strictInequality}`)
            // "30" not equal to 30 -> false
            let Inequality=val1!=val2
            console.log(`val1=${val1}!=val2=${val2}
                Ans ${Inequality} its type is ${typeof Inequality}`)

/*



*/


let numb3=20
let numb4=10

let str1="a"
let str2="b"

console.log(`num3=${numb3} and numb4=${numb4}`)
console.log(`str1=${str1} and str2=${str2}`)

console.log(`numb3>numb4 ${numb3>numb4}`)
console.log(`str2>str1 ${str1>str2}`)

console.log(`numb3>=numb4 ${numb3>=numb4}`)
console.log(`str2>=str1 ${str1>=str2}`)

console.log(`numb3<numb4 ${numb4>numb3}`)
console.log(`str2<str1 ${str1<str2}`)

console.log(`numb3<=numb4 ${numb3<=numb4}`)
console.log(`str2<=str1 ${str1<=str2}`)

