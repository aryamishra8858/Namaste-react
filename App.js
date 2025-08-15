import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML Element (render this to DOM then it becomes HTML element)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React!!!🚀"
// );
// console.log(heading);

//JSX - Is not HTML in js , it is HTML or XML like syntax
//JSX (transpiled before it reaches the js) and the conversion is done by Babel
//JSX is converted in React.createElement and this react.createElement makes a react element(JS object) which is then rendered to the DOM as an HTML element
// React Element
const heading = <h1 className="head">Namaste React using jsx!!!🚀</h1>;// and react component is written like this (const Heading = ()=> )

// React Component - There is two types of components:
// 1- Class based component - Old way of writing code
// 2- Functional component - New way of writing code, more popular and recommended

// React functional component (A function that returns JSX code is a functional component)
const HeadingComponent = () => {
  return (
    <h1 className="heading">Namaste React using functional component!!!🚀</h1>
  );
};
//OR (this heading component can be written like as given below)
const HeadingComponent2 = () => (
    <div id="container">
  <h1 className="heading 2">Namaste React using functional component!!!🚀</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>); // We render functional component like this using </>
// root.render(heading); // We render react element like this
