import React, { Component } from "react";

export default class AddTask extends Component {
  // props => add
  state = {
    inputValue: "",
  };
  // handle changes in the input field
  handleChange = (event) => this.setState({ inputValue: event.target.value });
  render() {
    return (
      <div>
        <h1>Our to-do list</h1>
        <form onSubmit={(e) => e.preventDefault(e)} className="frm">
          <input
            onChange={(e) => this.handleChange(e)}
            value={this.state.inputValue}
            className="inp"
            type="text"
            placeholder="Enter task.."
          />
          <button onClick={() => this.props.add(this.state.inputValue)}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

// import React from 'react'

// const addTask = (props) => {
//     return (
//         <div>
//             onclick props.add
//         </div>
//     )
// }

// export default addTask
