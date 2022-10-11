import React, { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h2>This is Class Component </h2>
        <h3 className="text-warning">
          Props Recieved from Parent - {this.props.location}
        </h3>
      </>
    );
  }
}

export default ClassComp;

// rcc -> Snippet for creating class Component
