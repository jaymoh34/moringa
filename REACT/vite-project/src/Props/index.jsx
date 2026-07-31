/*
1. Components are functions.
    input->output
    input<dat>->output is ui
2.Create reusable components you need an 
  understanding of props properties
3.Each component you create in react 
  will always have props
4.Props are passed from parent to child
-> all data types can be passed into props
   including other components
*/


function Parent() {
    //primitive datatypes
    const str = "Hello world";//string
    const amount = "2000";//number
    const isOk = true;//boolean
    const notSet = null;//null
    //Objects:<>
    const car ={
        model: "Audi A7",
        manufacture: "AUDI AG",
        engine:{
            cc: "3000",
            horsepower: "355",
            torque: "500Nm"
        },
    };

    const colors =["blue", "green", "yelllow"];

    return (
        <div>
            <h1>I am the parent component</h1>
            <Child1 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
            <hr/>
            <Child2 
            str={str} 
            amountInNumber={amount} 
            isOk={isOk} 
            notSet={notSet} 
            car={car}
            colors={colors}
            obj={{ name: "", value: ""}}//forget ensure double brackets 
            />
            <hr />
            <Child3 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />

        </div>

    );
}

//display props usng prop keyword
function Child1(props) {
    console.log(props);
    return (
        <div>
            <h1>I am the child component</h1>
            <ul>
                <li>
                    Favourite string <b>{props.str}</b>
                </li>
                <li>
                    Amount <b>{props.amountInNumber}</b>
                </li>
                <li>
                    isOk <b>{props.isOk}</b>
                </li>
                <li>
                    isOk <b>{String(props.isOk)}</b>{""}
                    {/*
                    for booleans convert them to string before displaying
                    */}
                </li>
                <li>
                    Not set <b>{props.notSet}</b>
                </li>
            </ul>
        </div>
    );
}

export default Parent;

//using destructuring
function Child2(props) {
    //key:value
    // const amount = props.amountInNumber;
    //key:number
    //key: string variable naming
    // const {str,amountInNumber}=props;

    const {  str, amountInNumber, isOk, notSet, car, colors, obj } = props;
    return (
        <div>
            <h1>I am the child 2 component</h1>
            <ul>
                <li>
                    Favourite string <b>{str}</b>
                </li>
                <li>
                    Amount <b>{amountInNumber}</b>
                </li>
                <li>
                    isOk <b>{isOk}</b>
                </li>
                <li>
                    isOk <b>{String(isOk)}</b>{" "}
                    {/*
                    for booleans convert them to string before displaying
                    */}
                </li>
                <li>
                    Not set <b>{notSet}</b>
                </li>

                {/* Displaying the updated car object */}
                <li>
                    Car Model: <b>{car.model}</b>
                    </li>
                <li>
                    Manufacturer: <b>{car.manufacture}</b>
                    </li>
                <li>
                    Engine CC: <b>{car.engine.cc}</b>
                    </li>
                <li>
                    Horsepower: <b>{car.engine.horsepower}</b>
                    </li>
                <li>
                    Torque: <b>{car.engine.torque}</b>
                    </li>
                
                {/* Displaying the colors array as a string */}
                <li>
                    Colors: <b>{colors.join(", ")}</b>
                    </li>

                {/* Displaying the obj */}
                <li>
                    Obj Name: <b>{obj.name}</b>, Value: <b>{obj.value}</b>
                    </li>
            </ul>
        </div>
    );
}

//direct destructuring
function Child3({ str, amountInNumber, isOk, notSet }) {
    //const { str, amountInNumber, isOk, notSet } = props;
    return (
        <div>
            <h1>I am the child 3 component</h1>
            <ul>
                <li>
                    Favourite string <b>{str}</b>
                </li>
                <li>
                    Amount <b>{amountInNumber}</b>
                </li>
                <li>
                    isOk <b>{isOk}</b>
                </li>
                <li>
                    isOk <b>{String(isOk)}</b>{" "}
                    {/*
                    for booleans convert them to string before displaying
                    */}
                </li>
                <li>
                    Not set <b>{notSet}</b>
                </li>
            </ul>
        </div>
    );
}



