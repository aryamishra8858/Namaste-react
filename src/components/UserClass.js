import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
      // console.log(this.props.name + "Child constructor ");
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aryamishra8858");
    const json = await data.json();

    this.setState({ userInfo: json });

    console.log(json);
    // console.log(this.props.name + "Child componentDidCount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + "Child render ");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: arya6164@mishra</h4>
      </div>
    );
  }
}

export default UserClass;
