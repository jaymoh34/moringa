/*
Arrays are just objects.
->specialized.<objects>
key<number,string,null,undefined,boolean>:
value:<>

->when accessing array elements
use only bracket notation.
the keys are numbers

*/

/* 
Have all your car values from car object inside the arrray.
->add final elem2nt which is an array with your favourite numbers,
access using the array all items.<dont use loop>
->use bracket notation 
*/

// ============================================
// CAR ARRAY WITH ALL VALUES
// ============================================

let carArray = [
    "Audi",                              // Index 0: name
    "A7 S-Line",                         // Index 1: model
    "280km/hr",                          // Index 2: top_speed
    "Nadro Grey",                        // Index 3: color
    "3000cc",                            // Index 4: engine_capacity
    6,                                   // Index 5: cylinders
    "V6",                                // Index 6: engine_number
    340,                                 // Index 7: horsepower
    "Sportback",                         // Index 8: manufacturer_name
    "Four Rings",                        // Index 9: manufacturer_aka
    "Germany",                           // Index 10: country
    "SportBack luxury four-door coupe design", // Index 11: design
    "Features an active rear spoiler that automatically extends at 120km/hr.", // Index 12: fun_fact
    false,                               // Index 13: is_it_a_classic
    [7, 21, 42, 69, 100]                // Index 14: favourite_numbers
];

// ACCESS ALL ITEMS USING BRACKET NOTATION (NO LOOPS)

console.log(carArray);

console.log(`Index 0 (name): ${carArray[0]}`);
console.log(`Index 1 (model): ${carArray[1]}`);
console.log(`Index 2 (top_speed): ${carArray[2]}`);
console.log(`Index 3 (color): ${carArray[3]}`);
console.log(`Index 4 (engine_capacity): ${carArray[4]}`);
console.log(`Index 5 (cylinders): ${carArray[5]}`);
console.log(`Index 6 (engine_number): ${carArray[6]}`);
console.log(`Index 7 (horsepower): ${carArray[7]}`);
console.log(`Index 8 (manufacturer_name): ${carArray[8]}`);
console.log(`Index 9 (manufacturer_aka): ${carArray[9]}`);
console.log(`Index 10 (country): ${carArray[10]}`);
console.log(`Index 11 (design): ${carArray[11]}`);
console.log(`Index 12 (fun_fact): ${carArray[12]}`);
console.log(`Index 13 (is_it_a_classic): ${carArray[13]}`);
console.log(`Index 14 (favourite_numbers): ${carArray[14]}`);

// ACCESS FAVOURITE NUMBERS (NESTED ARRAY)

console.log(`Favourite Numbers Array: ${carArray[14]}`);
console.log(`First favourite number: ${carArray[14][0]}`);
console.log(`Second favourite number: ${carArray[14][1]}`);
console.log(`Third favourite number: ${carArray[14][2]}`);
console.log(`Fourth favourite number: ${carArray[14][3]}`);
console.log(`Fifth favourite number: ${carArray[14][4]}`);

console.table(carArray);
console.log(carArray.length)

//array[0]
//Loop to access all the elements.
// start an array starts at 0.
//end point ->any size//3 //20<>
for (let i = 0; i < carArray.length; i++) {
    //0 to 20
    console.log("i is", i);
    console.log(carArray[i]);
}
