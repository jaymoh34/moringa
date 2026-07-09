/*
-Objects are a complex datatypes
 its a datatype that houses other datatypes.

  - in realife you cannot
    relly express data using a single variable.

-> {
    key:value
    key:value
    key:value
}// block

key=> <number or a string><unique>
value=>any other datatype<boolean,string,nulll,objects> be a function
if value is a function <method>
*/



/*
You have one variable that represent the whole thing.
*/
const student = {
  name: "James Sang",
  age: 24,
  "favourite quote": "Backwar Never Forward Ever", 
  parent: {
    name: "Keino",
    phone: "254722391887"
  },
  pet: {},  
  34: "Favourite number",  
  sayMyName: function() {
    console.log("James Sang");  
  },
  announce: function() {
    alert("James Sang Gracing you with his/her presence");
  }
};

const car = {
    name: "Audi",
    model: "A7 S-Line",
    top_speed: "280km/hr",
    color: "Nadro Grey",
    
    engine_information:{
        engine_capacity: "3000cc",
        cylinder:6,
        number: "V6",
        horsepower: 340,
    },
     manufacture:{
        name: "Sportback",
        aka:"Four Rings",
        country: "Germany"
     },
     7: "SportBack luxury four-door coupe design",

     alert_info: function(){
        alert(`car:${car.name}
                model:${car.model}
                color:${car.color}
                top_speed:${car.top_speed}
                `);
     },
     "fun fact": "Features an active rear spoiler that automatically extends at 120km/hr.",
    is_it_a_classic: false, 
};

    car.alert_info();

    