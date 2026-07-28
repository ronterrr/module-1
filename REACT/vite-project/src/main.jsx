import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


//Components must always start with a capital letter and always return either valid jsx or null.
//If it returns valid jsx, it can only return a react fragment or a single HTML element.

function MyComponent(){
  return null;
}

function MyComponent2(){
  return (
  <div>
    <h1>This is my second component</h1>
  </div>
  );
}

// function InvalidJsxComponent(){
//   return (
//     <div>
//       <h1>This is an invalid component</h1>
//     </div>
//     <div></div> //Invalid cause of multiple HTML elements
//   );
// }

function ReactFragment(){
  return(
    <>
    <div>
      <h1>This is a component that uses react fragments</h1>
    </div>
    <div></div>
    </>
    // '<></>' is a react fragment
  );
}

function ParentComponent(){
  return(
    <>
    <MyComponent/>
    <MyComponent2/>
    <ReactFragment/>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>My first react app</h1>
    <MyComponent/> {/*self closing*/}
    <MyComponent2></MyComponent2> {/*Open and closing tags*/}
    <ReactFragment/>
    <ParentComponent/>
  </StrictMode>,
)
