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

    /*
    data types<objects>
    1.confirm that yoa are to print the object 
    and also its type 
    */

    console.log(`Car datatype ${typeof car}`);
    console.log(car);
    console.log("--using console.log(table)--");
    console.log(car);

    /*
    access individual part of your object.
    2 ways of accessing object properties
      1.dot notation<does not work for anything but looks good>
        ->does not work for properties which are
            -numbers
            -string with spaces,starting with a number or special symbols
            -can only access properties that follow variable naming rules
      2.bracket notation<work for everthing:looks bad>
        ->accecc properties using variables

        for each property of your object.include nestde ones
        access it using both
        dot notation and bracket notation.
        print the value and print its type

        Hint for nested properties use example. car.manufacture.name or car["manufacture"]["name"]
     */

 //Dot notation
 console.log(`Name is ${car.name} its type is ${typeof car.name}`);
 console.log(`Model is ${car.model} its type is ${typeof car.model}`);
 console.log(`Top speed is ${car.top_speed} its type is ${car.top_speed}`);
 console.log(`Color is ${car.color} its type is ${typeof car.color}`);
 console.log(`Engine capacity is ${car.engine_information.engine_capacity} its type
    is ${typeof car.engine_information.engine_capacity}`);
 console.log(`Cylinders is ${car.engine_information.cylinder} its type is ${typeof 
    car.engine_information.cylinder}`);
 console.log(`Horsepower is ${car.engine_information.horsepower} its type is ${typeof 
    car.engine_information.horsepower }`);


 //Bracket notation
 console.log(`Manufacture Name is ${car["manufacture"]["name"]} its type is ${typeof
    car["manufacture"]["name"]}`);
 console.log(`Manufacture AKA is ${car["manufacture"]["aka"]} its type is ${typeof
    car["manufacture"]["aka"]}`);
 console.log(`Country is ${car["manufacture"]["country"]} its type is ${typeof car["manufacture"]["country"]}`);
 console.log(`Classic is ${car["is_it_a_classic"]} its type is ${typeof car["is_it_a_classic"]}`);
 console.log(`Fun fact is ${car["fun fact"]} its type is ${typeof car["fun fact"]}`) 

 //accessing using variables
 let nameKey = "name"
 let modelKey = "model"
 let speedKey = "top_speed"
 let colorKey = "color"

 console.log(`Name is ${car[nameKey]} its type is ${typeof car[nameKey]}`);
 console.log(`Model is ${car[modelKey]} its type is ${typeof car[modelKey]}`);
 console.log(`Top speed is ${car[speedKey]} its type is ${typeof car[speedKey]}`);
 console.log(`Color is ${car[colorKey]} its type is ${typeof car[colorKey]}`);

 const car_name = car.name;
 const engine_information = car["engine_information"];
 console.log(car_name)
 console.log(engine_information);
 

 /*
 Udate object data.
 Before you can update you need to be able 
 
 */