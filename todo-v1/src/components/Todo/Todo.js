import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoActions from "../TodoActions/TodoActions";
import TodoRender from "../TodoRender/TodoRender";
import "./Todo.css";

const initialFormData = {
  isEdit: false,
  toDoName: "",
  toDoNote: "",
  isFinish: false,
  id: "",
  index: null,
  startTodo:''
};
const getIsFinishedTodosCount = (todos) =>
  todos.reduce(
    (acc, curr) => {
      acc.total = todos.length;

      if (curr.isFinish) {
        acc.finished = acc.finished + 1;
      }

      return acc;
    },
    { total: 0, finished: 0 }
  );
  
function Todo() {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDisplayTodo, setIsOpenDisplayTodo] = useState(false);
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const todosCount = getIsFinishedTodosCount(todos);

  const setFilterTab = (tab, todos) => {
    if (tab === 0) {
      return todos;
    } else {
      if (tab === 1) {
        return todos.filter((item) => !item.isFinish);
      } else {
        return todos.filter((item) => item.isFinish);
      }
    }
  };

  const sortedTodos = setFilterTab(tab, todos);

  const resetAll = () => {
    setIsOpen(false);
    setIsOpenDisplayTodo(false);
    setFormData(initialFormData);
  };

  const handleOpenDialog = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSetFieldValue = (fieldName, value) =>
    setFormData((prevState) => ({ ...prevState, [fieldName]: value }));

  const handleChangeTab = (tabValue) => setTab(tabValue);

  const handleSetTodoSubmit = (e) => {
    e.preventDefault();
    if (formData.isEdit) {
      const editedTodos = todos;
      editedTodos.splice(formData.index, 1, {
        ...formData,
        isEdit: false,
        index: null,
        startTodo:moment().format('MMMM Do YYYY, h:mm:ss a')
      });
      setTodos(editedTodos);
    } else {
      setTodos((prevTodos) => [...prevTodos, { ...formData, id: uuidv4(),startTodo:moment().format('MMMM Do YYYY, h:mm:ss a')}]);
    }
    resetAll();
  };

  const handleMarkTodo = (isChecked, index) => {
    const updatedTodos = todos.slice();
    updatedTodos.splice(index, 1, { ...todos[index], isFinish: isChecked });
    setTodos(updatedTodos);
  };

  const handleOpenTodo = (todo) => {
    setIsOpenDisplayTodo(true);
    setFormData(todo);
  };

  const handleEditTodo = () => {
    setFormData((prevState) => ({ ...prevState, isEdit: true }));
    setIsOpenDisplayTodo(false);
    handleOpenDialog();
  };

  const handleRemoveTodo = () => {
    setTodos(todos.filter((item) => item.id !== formData.id));
    resetAll();
  };

  return (
    <div className="todo-wrapper">
      <TodoHeader
        handleOpenDialog={handleOpenDialog}
        isOpen={isOpen}
        handleSetFieldValue={handleSetFieldValue}
        formData={formData}
        handleSetTodoSubmit={handleSetTodoSubmit}
        handleEditTodo={handleEditTodo}
        isOpenDisplayTodo={isOpenDisplayTodo}
        handleRemoveTodo={handleRemoveTodo}
        handleCloseButton={resetAll}
        todosCount={todosCount}
      />
      <TodoActions 
      handleChangeTab={handleChangeTab}
      tab={tab}
      />
      <TodoRender
        todos={sortedTodos}
        handleMarkTodo={handleMarkTodo}
        handleOpenTodo={handleOpenTodo}
      />
    </div>
  );
}

export default Todo;
