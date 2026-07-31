function Mapping() {
    /*
    in react you might need to display data from an array
    for <array.map>: new Array
    react {expression}
    map(@param1)
    @param1=> call back function => single array item will be passed, index
     @param1(@param2,@param3)
        @param2->single array will be passed,index
    */

    /*
    the map function and the loop
    map functiom is method in an array:<pop,push>
    ->the work of the map function is creating a new array from going through the existing array
    ->expression statement
    ->evalaute and yield results.
    */

    
    const numbers = [2, 6, 23, 565, 32];

    
    let x = numbers.forEach((element) => {
        console.log("Element is", element);
        return "this is n";
    })
    console.log(x); // This will print 'undefined' because forEach does not return anything

    //powers of the number
    const powersOfNumber = numbers.map((n) => {
        console.log("this is n", n);
        return n * n;
    })//
    const justMap = numbers.map(() => "cats and dogs"); //["cats and fogs"]

    console.log(powersOfNumber);
    console.log(justMap);

    const colors = ["green", "yellow", "blue", "black"];

    function singleColor(c, i) {
        if (i === 1) {
            return null;
        }
        return (
            <div key={i}>
                for index <b>{i}</b> color is <b>{c}</b>
            </div>
        );
    }

    //statement

    return (
        <div>
            <h1>Mapping colors</h1>
            <h4>using arrow function</h4>
            {colors.map((color, index) => {
                return (
                    <div key={index}>
                        for index <b>{index}</b> color is <b>{color}</b>
                    </div>
                );
            })}
            <h4>using direct arrow function</h4>
            {colors.map((c, i) => (
                <div key={i}>
                    for index <b>{i}</b> color is <b>{c}</b>
                </div>
            ))}
            <h4>using anonymous function</h4>
            {colors.map(function (c, i) {
                return (
                    <div key={i}>
                        for index <b>{i}</b> color is <b>{c}</b>
                    </div>
                );
            })}
            <h4>using referencing the function</h4>
            {colors.map(singleColor)}
            <h4>using a component</h4>
            {colors.map((c, i) => {
                return <SingleColorComponent c={c} i={i} key={i} />;
            })}
            {/*using arrow func 1*/}
        </div>
    );
}

function SingleColorComponent(props) {
    const { c, i } = props;

    return (
        <div>
            for index <b>{i}</b> color is <b>{c}</b>
        </div>
    );
}

export default Mapping;