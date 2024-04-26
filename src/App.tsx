import React, { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TaskManager from "./components/TaskManager";
import { Todo } from "./models/models";
import { getTodos, saveTodos, getCompletedTodos, saveCompletedTodos } from "./utils/localStorage";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    const storedTodos = getTodos();
    const storedCompletedTodos = getCompletedTodos();
    if (storedTodos) setTodos(storedTodos);
    if (storedCompletedTodos) setCompletedTodos(storedCompletedTodos);
  }, []);

  useEffect(() => {
    saveTodos(todos);
    saveCompletedTodos(completedTodos);
  }, [todos, completedTodos]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Mindbox Tasker</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TaskManager 
        todos={todos} 
        setTodos={setTodos} 
        completedTodos={completedTodos} 
        setCompletedTodos={setCompletedTodos} 
      /> 
    </div>
  );
};

export default App;