
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import React from 'react';

/* 
  const defaultTodos = [
    { text: 'Inserta una nueva tarea', completed: false },
    { text: 'Aprender Angular', completed: false },
    { text: 'Aprender Vue', completed: false },
    { text: 'Marca tus tareas completas', completed: true }
  ];
stringifyDT = localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */



function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;