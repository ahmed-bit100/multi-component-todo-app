import React, { Component } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TodoList from "./Components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    tasks: [
      { id: 0, action: "wake up", isDone: true },
      { id: 1, action: "have coffee", isDone: false },
    ],
  };
  //edit Task
  handleEdit = (id, value) => {
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === id ? { ...el, action: value } : el
      ),
    });
  };

  // deleting tasks from the list
  handleDelete = (index) =>
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== index),
    });
  // handling you finished and unfinished tasks
  handleTask = (index) =>
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === index ? { ...task, isDone: !task.isDone } : task
      ),
    });
  // adding tasks to the list
  handleAdd = (text) => {
    const newTask = {
      id: this.state.tasks.length,
      action: text,
      isDone: false,
    };
    text.trim() === ""
      ? alert("invalid task")
      : this.setState({ tasks: [...this.state.tasks, newTask] });
    this.setState({ newText: "" });
  };

  render() {
    return (
      <div className="title">
        <AddTask add={this.handleAdd} />
        <TodoList
          todos={this.state.tasks}
          handleDelete={this.handleDelete}
          handleTask={this.handleTask}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
