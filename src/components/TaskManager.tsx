import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Todo } from "../models/models";
import TodoList from "./TodoList";

interface TaskManagerProps {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Array<Todo>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }

const TaskManager: React.FC<TaskManagerProps> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    const updatedAdd = { ...add };

    if (destination.droppableId === "TodosList") {
      const newActive = [...active];
      newActive.splice(destination.index, 0, updatedAdd);
      setTodos(newActive);
    } else {
      const newCompleted = [...complete];
      newCompleted.splice(destination.index, 0, updatedAdd);
      setCompletedTodos(newCompleted);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        completedTodos={completedTodos} 
        setCompletedTodos={setCompletedTodos} 
      /> 
    </DragDropContext>
  );
};

export default TaskManager;