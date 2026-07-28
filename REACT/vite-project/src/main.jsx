import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


//starts with capital letter

/*
 React Intro to components.
1. create a function name is MyComponent.<name starts with uppercase letter>
   return null.
2. create a function name is MyComponent2. this should return a valid html element
   eg a div inside have h1 with some text . example
   <div><h1>fav text</h1></div>
3. using a react fragment. Create function name is MyComponent3.this
   should return a react fragment inside have multiple html elements.
   eg <<div></div> <<div></div></div></div></div></div></div></div></div></div></div>
   */

// MyComponent 
function MyComponent() {
  return null;
}

// MyComponent2 
function MyComponent2() {
  return (
    <div>
      <h1>Welcome to React</h1>
    </div>
  );
}

// MyComponent3 
function MyComponent3() {
  return (
    <>
      <div>
        <h2>Section 1</h2>
        <p>This is the first section</p>
      </div>
      <div>
        <h2>Section 2</h2>
        <p>This is the second section</p>
      </div>
      <div>
        <h2>Section 3</h2>
        <p>This is the third section</p>
      </div>
    </>
  );
}

/*  
1.Rendering components.<Displaying components>  
  in your StrictMode component you will be rendering the other components.  
  use both self closing and open and closing tags.  
  example if your component name i MyComponent  
  inside the StrictMode render it  
  1.self closing: <MyComponent/>  
  2.Open and closing tags: <MyComponent></MyComponent>  
  
2.Create a component called parent component. Render all your other components inside  
  the Parent Component. And finally put the Parent Component inside the StrictMode component
  */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>My first react app </h1>
     {/* Self closing tags */}
    <MyComponent />
    <MyComponent2 />
    <MyComponent3 />
    
    {/* Open and closing tags */}
    <MyComponent></MyComponent>
    <MyComponent2></MyComponent2>
    <MyComponent3></MyComponent3>
    <ParentComponent/>
  </StrictMode>
)

function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      
      {/* 1. Rendering components using self closing tag */}
      <MyComponent />
      <MyComponent2 />
      <MyComponent3 />
      
      {/* 2. Rendering components using open and closing tags */}
      <MyComponent></MyComponent>
      <MyComponent2></MyComponent2>
      <MyComponent3></MyComponent3>
    </div>
  );
}