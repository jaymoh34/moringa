/*
Truthy or falsey
->if you have something is not falsely
then it is truthy
falsey
1.false
2.0
3.-0
4.null
5.undefined
6.''->empty string
7.NaN->not a number
Anything that is not falsely is truthy
*/


let userName1="John Mwangi"//truthy
let userName2=""//falsey

let activeUserName=userName2 || userName1
//activeUserName=>
console.log(activeUserName)

let bothUserNameOk=userName1&&userName2
console.log(bothUserNameOk)//truthy or falsey
