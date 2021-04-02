import React, { Component } from "react";

export class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleShow = () => this.setState({ show: !this.state.show });

  render() {
    console.log(this.props.handleEdit);
    return (
      <div>
        {this.state.show ? (
          <>
            <input
              type="text"
              onClick={this.handleChange}
              defaultValue={this.props.todo.action}
              ref={(value) => (this.input = value)}
            />
            <button
              onClick={() => {
                this.props.handleEdit(this.props.todo.id, this.input.value);
                this.setState({ show: false });
              }}
            >
              confirm
            </button>
          </>
        ) : (
          <div>
            <h1 id={this.props.todo.isDone ? "done" : ""}>
              {" "}
              {this.props.todo.action}{" "}
            </h1>
            <button onClick={() => this.props.complete(this.props.todo.id)}>
              {" "}
              {this.props.todo.isDone ? "Undo" : "Complete"}{" "}
            </button>
            <button onClick={() => this.props.delete(this.props.todo.id)}>
              Delete
            </button>
            <button onClick={this.handleShow}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default Edit;
