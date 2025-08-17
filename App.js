import React from "react";
import ReactDOM from "react-dom/client";


/**
* Header
*  - Logo
*  - Nav Items
* Body
*  - Search Bar
*  - RestaurantContainer
*    - RestaurantCard
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact
*/


// React component
function Title() {
  return (
    <h1 className="head" tabIndex="5">
      Namaste I am Arya
    </h1>
  );
}

// React element
const title = (
  <h1 className="head" tabIndex="5">
    Namaste I am Arya mishra and this is a React element
  </h1>
);

// Component composition
const HeadingComponent2 = () => (
  <div id="container">
    <Title /> {/* We can use a component like this */}
    <Title></Title> {/* this three Title component are same */}
    {Title()}  {/* We can use this component as an function also */}

    {/* We can use a Element like this {title} */}
    
    <h2>{100 + 200}</h2> {/*Writing JS expression inside JSX*/}
    <h1 className="heading 2">Namaste React using functional component!!!🚀</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />); // We render functional component like this using </>
// root.render(heading); // We render react element like this
