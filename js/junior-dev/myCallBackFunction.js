/*
->our own callback function
->doing shape stuff
------->shapes
circles
rectangle
triangle

1.for each of the shapes
create a function<arrow,name>
to calculate the area.ensure
the functiom takes reqired parameters
test the function
2.2.we are create a super function called shape.
its going to take the following params
@param1=>function <correct shape>required
@param2=>shape name<string>
@param3=>s1 <required>
@param4=>s2<optional>
@param5=>s3<optional>
1.inside your function shape.
console each of the parameters and their types.
2.for each of your function ie for areaCircle,
areRectangle, and areaTriangle
call the shape function and pass the required params.
example for areaCircle
-shape(areaCircle,"Circle",10)->for areCircle.test make observation
-shape(areaRectangle,"Rectangle",10,5)->for areCircle.test make observation
*/

const areaCircle = (radius) => 3.142 * radius * radius;
const areaRectangle = (length, width) => length * width;
const areaTriangle = (base, height) => (base * height) / 2;



const circleArea = (radius) => {
    const pi = 3.14159;
    return pi * radius * radius;
}

const rectangleArea = (length, width) =>{
    return length * width
};

const triangleArea = (base, height) => {
   return (base * height) / 2;
}

console.log(`Circle (r=5) ${circleArea(5)}`);
console.log(`Rectangle (4,6) ${rectangleArea(4,6)}`);
console.log(`Triangle (b=8,h=5) ${triangleArea(8,5)}`);

function shape(shapeFunction, shapeName, side1, side2, side3){
    console.log(`ShapeFunction ${shapeFunction} its a ${typeof shapeFunction}`);
    console.log(`ShapeName ${shapeName} its a ${typeof shapeName}`);
    console.log('side1 ${side1} its a ${typeof side1}');
    console.log('side2 ${side2} its a ${typeof side2}');
    console.log('side3 ${side3} its a ${typeof side3}');
}
//for area circle


