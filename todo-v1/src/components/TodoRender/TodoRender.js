import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./TodoRender.css";

const Todo = ({ todo, handleOpenTodo, index, handleMarkTodo }) => {
  const isFinishedTodo = todo.isFinish && "todo-finished";

  return (
    <div className="todo-container">
      <span>
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon color="primary" />}
          onClick={(e) => handleMarkTodo(e.target.checked, index)}
          checked={todo.isFinish}
        />
      </span>
      <div
        className="todo-item item"
        onClick={() => handleOpenTodo({ ...todo, index })}
      >
        <span className={`${isFinishedTodo} item-full`}>{todo.toDoName}</span>
        <span className={isFinishedTodo}>{todo.startTodo}</span>

        <ChevronRightIcon fontSize="small" />
      </div>
    </div>
  );
};
function TodoRender({ todos, handleMarkTodo, handleOpenTodo }) {
  return (
    <div className="todos-renderer-wrapper">
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleOpenTodo={handleOpenTodo}
          index={index}
          handleMarkTodo={handleMarkTodo}
        />
      ))}
    </div>
  );
}

export default TodoRender;
