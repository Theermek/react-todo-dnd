import { Todo } from "../models/models";

const TODOS_KEY = "todos";
const COMPLETED_TODOS_KEY = "completedTodos";

export const getTodos = (): Todo[] => {
  const storedTodos = localStorage.getItem(TODOS_KEY);
  return storedTodos ? JSON.parse(storedTodos) : [];
};

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

export const getCompletedTodos = (): Todo[] => {
  const storedTodos = localStorage.getItem(COMPLETED_TODOS_KEY);
  return storedTodos ? JSON.parse(storedTodos) : [];
};

export const saveCompletedTodos = (completedTodos: Todo[]): void => {
  localStorage.setItem(COMPLETED_TODOS_KEY, JSON.stringify(completedTodos));
};