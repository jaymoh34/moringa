let firstName="Samuel"
let secondName="Jane"
let age=20
let address="Juja County"

let userDetails=firstName+""+
secondName+"is"+age+"years old"+
"he stays at"+address
console.log(userDetails)
console.log("User details is",typeof userDetails)

//Template string use  back ticks
let userDetails2=
`${firstName} ${secondName} is ${age} years old and he stays at &{address}`
console.log(userDetails2)
console.log(`${firstName} ${secondName} is ${age} years old and he stays at &{address}`)