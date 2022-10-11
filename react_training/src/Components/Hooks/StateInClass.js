import React, { Component } from "react";

export default class StateInClass extends Component {
  constructor(props) {
    super(props);

    // lets define state varaible
    this.state = {
      counter: 0,
      name: "React",
    };

    this.decrementCount = this.decrementCount.bind(this);
  }
  incrementCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCount() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div>
        <h2>This is Class Component</h2>
        <h3>Count = {this.state.counter}</h3>
        <h3>My Nane is {this.state.name}</h3>
        <button className="btn btn-primary" onClick={this.incrementCount}>
          Increment
        </button>
        <button className="btn btn-danger mx-3" onClick={this.decrementCount}>
          Decrement
        </button>
      </div>
    );
  }
}
