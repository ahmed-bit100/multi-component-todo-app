import React from "react";
import Edit from "./Edit";
// import TodoCard from "./TodoCard";

const TodoList = (props) => {
  // props => todos, handleDelete, handleTask
  return (
    <div>
      {props.todos.map((el) => (
        // <TodoCard
        //   todo={el}
        //   delete={props.handleDelete}
        //   complete={props.handleTask}
        // />
        <Edit
          todo={el}
          delete={props.handleDelete}
          complete={props.handleTask}
          handleEdit={props.handleEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
