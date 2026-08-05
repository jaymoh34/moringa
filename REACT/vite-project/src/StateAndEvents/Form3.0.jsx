import { useState } from "react";

function Form() {
  // event when name changes
  // useState("")
  // storedata=[]
  // 0: initial state
  // 1: update State function

  //return []=>
  //0 current state
  //1 funciton:<update state>

  const [input, setInput] = useState(["", "", "", ""]);

  const nameOnChange = (e) => {
    // console.log("NAME IS", e.target.value);
    const inputClone = [...input]; //
    //const inputClone = { ...input }
    inputClone[0] = e.target.value;
    setInput(inputClone);
  };

  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("name is", input[0]);
    console.log("email is", input[1]);
    console.log("phone is", input[2]);
    console.log("password is", input[3]);
    //request >>
  };

  console.log(input);

  return (
    <div>
      <main>
        <div>
          <label>Name: </label>
          <div>
            <input value={input[0]} onChange={nameOnChange} />
          </div>
        </div>
        <div>
          <main>
            <div>
              <label>Email: </label>
              <div>
                <input
                  value={input[1]}
                  onChange={(e) => {
                    const inputClone = [...input]; //
                    //const inputClone = { ...input }
                    inputClone[1] = e.target.value;
                    setInput(inputClone);
                  }}
                />
              </div>
            </div>
          </main>
        </div>
        <div>
          <main>
            <div>
              <label>Phone: </label>
              <div>
                <input
                  value={input[2]}
                  onChange={(e) => {
                    const inputClone = [...input]; //
                    //const inputClone = { ...input }
                    inputClone[2] = e.target.value;
                    setInput(inputClone);
                  }}
                />
              </div>
            </div>
          </main>
        </div>
        <div>
          <main>
            <div>
              <label>Password: </label>
              <div>
                <input
                  type="password"
                  value={input[3]}
                  onChange={(e) => {
                    const inputClone = [...input]; //
                    //const inputClone = { ...input }
                    inputClone[3] = e.target.value;
                    setInput(inputClone);
                  }}
                />
              </div>
            </div>
          </main>
        </div>
        <main>
          <button onClick={onSubmit}>Submit</button>
        </main>
      </main>

      {/*displaying data>*/}
      <ul>
        <li>Name:{input[0]}</li>
        <li>Email:{input[1]}</li>
        <li>Phone:{input[2]}</li>
        <li>Password:{input[3]}</li>
      </ul>
    </div>
  );
}

export default Form;