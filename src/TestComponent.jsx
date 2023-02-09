import React, { Component } from "react";

export default class TestComponent extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  componentDidMount() {
    console.log("Hello from mounting")
  }

  handleClick() {
    this.setState((prevstate) => {
        return {
          ...prevstate,
          counter: prevstate.counter + 1,
        };
      });
    }
  

  render() {
    return (
      <div>
        <p>Hello</p>
        <p>{this.state.counter}</p>
        <h1>title</h1>
        <button
          onClick={() => {this.handleClick()}}
        >
          +
        </button>
      </div>
    );
  }
}
