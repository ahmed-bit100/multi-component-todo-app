import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    isShown: true,
  };
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleShow = () => {
    this.setState({ isShown: !this.state.isShown });
  };
  //   componentDidMount() {
  //     alert(`hello! our counter is set at ${this.state.count} `);
  //   }
  //   componentDidUpdate() {
  //     alert(`our counter is now at ${this.state.count}`);
  //   }
  render() {
    return (
      <div className="container">
        <button onClick={this.handleShow}> show/hide </button>
        {this.state.isShown && (
          <div>
            <h1> count : {this.state.count} </h1>
            <button onClick={this.inc}>Increment</button>
            <button onClick={this.dec}>Decrement</button>
          </div>
        )}
      </div>
    );
  }
}
