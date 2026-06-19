/*
Comparison operators evaluate to only true or false
 1.Equality ==
 2.Strict Equality ===
 3.Inequality !=
 4.Strict Inequality
 --JS--
*/

let numb1="23"
let numb2=23
//string===number => false
//numb1==numb2 ->type conversion
let StrictEqual=numb1===numb2 //Boolean
console.log(`numb1=${numb1}===numb2=${numb2}
    Ans ${StrictEqual} its type is ${typeof StrictEqual}`)
    let nonstrictEquality=numb1==numb2
    console.log(`numb1=${numb1}==numb2=${numb2}
        Ans ${nonstrictEquality} its type is ${typeof nonstrictEquality}`)



         let val1="hello"
         let val2="How are you"
         //different types should be equal
         //string is not equal number -> true
         let Strictinequality=val1!==val2
         console.log(`val1=${val1}!==val2=${val2}
            Ans ${Strictinequality} its type is ${typeof Inequality}`)
            // "30" not equal to 30 -> false
            let Inequality=val1!=val2
            console.log(`val1=${val1}!=val2=${val2}
                Ans ${Inequality} its type is ${typeof Inequality}`)