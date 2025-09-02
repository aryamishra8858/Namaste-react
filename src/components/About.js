import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidCMount() {
    // console.log("Parent componentDidMount");
  } // ComponentDidMount is used to make an api call

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is namaste react web series</h2>
        <UserClass name={"First"} location={"Delhi class"} />
      </div>
    );
  }
}

export default About;
