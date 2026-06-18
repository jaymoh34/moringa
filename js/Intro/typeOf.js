/*
the type of is just to tell you the variable type.
->number
->string
->boolean
->null
->undefined
*/

let numb1=749
console.log("numb1",numb1,"Its type is",typeof numb1)
let strNumb="854"
console.log("strNumb",strNumb ,"Its type is",typeof strNumb)
let myName="John"
console.log('My name is',myName,"Its type is",typeof myName)
let isMarried=true
console.log("isMarried",isMarried,"Its type is",typeof isMarried)
let nullVal=null//type of<null> object->
console.log("nullval",nullVal,"Its type is",typeof nullVal)
let unValue;
console.log("unValue",unValue,"Its type is",typeof unValue)


const bonus=200
const salary=50000

const salaryGross=bonus+salary; //instruction

//console.log(salaryGross) !-> more information
console.log("Gross salary is",salaryGross)//->more helpful
//Tax calculations
const paye=salaryGross*0.1
console.log("For gross salary of ",salaryGross,"Paye is",paye)
//->
const nhif=2500
console.log("Nhif deduction", nhif)
const sha=2500
console.log("SHA is", sha)
const totalDeductions=paye+nhif+sha
console.log("Total deduction are",totalDeductions)
const netsalary=salaryGross-totalDeductions
console.log("Your net salary is",netsalary)
