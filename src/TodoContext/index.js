import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);	// 1. Se crea un hook personalizado que guarda los todos en el localStorage
    const [search, setSearch] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [editingTodo, setEditingTodo] = React.useState(null);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(todo => {
        const text = todo.text.toLowerCase();
        const searchText = search.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapar caracteres especiales
        const regex = new RegExp(searchText, 'i'); // Crear una expresión regular
        return regex.test(text); // Usar la expresión regular para buscar coincidencias
    }).sort((a, b) => {
        // Ordenar: primero los no completados, luego los completados
        if (a.completed === b.completed) return 0;
        return a.completed ? 1 : -1;
    });

    const toDoCompleted = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(t => t.text === text);

        // Actualizar el estado inmediatamente
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }
    const toDoDelete = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(t => t.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos);
    }
    const updateTodo = (oldText, newText) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(t => t.text === oldText);
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
    }
    return <TodoContext.Provider value={{
        loading,
        error,
        toDoCompleted,
        toDoDelete,
        totalTodos,
        completedTodos,
        search,
        setSearch,
        todos,
        saveTodos,
        addTodo,
        searchedTodos,
        openModal,
        setOpenModal,
        updateTodo,
        editingTodo,
        setEditingTodo
    }}>
        {children}
    </TodoContext.Provider>
}


export { TodoContext, TodoProvider };