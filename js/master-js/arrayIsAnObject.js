/*
look at the difference
btw an array and an object.
->in an array keys are sequential<numbers>
*/
/*
create an object that behave like an array.
1. create an array give it <any name>
   inside the array haev two digits
   0:<any digit>
   1:<any digit>
2. create an object <any anme>
   inside the object have keys
   0:<any digit>
   1:<any digit>
   for the object create the lenght key.
   have it as size of the object<keys>
3. console.table both you should see there are the same
*/

const ar = [20, 5];
const arObj = {
    0: 20,
    1: 5,
    length: 2,

    push: function(newItem){
        //this <access object insideobject>instead of using the object name
        const key = this.length;//current key
        this[key] = newItem;
        this.length = this.length + 1;//increment the lenght
    }
};

console.table(ar);
console.table(arObj);
 arObj.push(11);
 console.table(arObj);


