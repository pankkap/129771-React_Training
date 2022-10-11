import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor() {
    super();
    console.log("Constructor Called");
    this.state = {
      counter: 0,
      show: true,
    };
  }

  componentDidMount() {
    console.log("Component-1 Has been Mounted");
  }
  componentDidUpdate() {
    console.log("Component-1 Has been Updated");
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1, show: !this.state.show });
  };

  render() {
    console.log("Render Called");
    return (
      <div>
        <h2>Counter Value = {this.state.counter}</h2>
        <button className="btn btn-primary" onClick={this.increment}>
          Update Counter
        </button>
        <hr />
        {this.state.show ? <ChildComp /> : null}
      </div>
    );
  }
}

class ChildComp extends React.Component {
  componentDidMount() {
    console.log("Component-2 Has been Mounted");
  }
  componentDidUpdate() {
    console.log("Component-2 Has been Updated");
  }
  componentWillUnmount() {
    console.log("Component-2 Has been removed");
  }
  render() {
    return <h2>This is Child Component</h2>;
  }
}
