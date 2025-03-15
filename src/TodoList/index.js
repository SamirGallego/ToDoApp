import './TodoList.css';
import React from 'react';

function TodoList({ children }) {
    const incompleteTodos = [];
    const completedTodos = [];

    // Separar los todos completados de los incompletos
    React.Children.forEach(children, child => {
        if (child && child.props && child.props.completed) {
            completedTodos.push(child);
        } else if (child && child.type && child.type.name !== 'TodosLoading'
            && child.type.name !== 'TodosEmpty'
            && child.type.name !== 'TodosError') {
            incompleteTodos.push(child);
        }
    });

    return (
        <ul className="todo-list">
            {/* Renderizar componentes de estado (loading, empty, error) */}
            {React.Children.toArray(children).filter(child =>
                child && child.type && (
                    child.type.name === 'TodosLoading' ||
                    child.type.name === 'TodosEmpty' ||
                    child.type.name === 'TodosError'
                )
            )}

            {/* Renderizar todos incompletos */}
            {incompleteTodos.length > 0 && (
                <li>
                    {incompleteTodos}
                </li>
            )}

            {/* Renderizar todos completados */}
            {completedTodos.length > 0 && (
                <div className='completed-container'>
                    <h2 className='completed-text'>Completados</h2>
                    <li className='completed-todos'>
                        {completedTodos}
                    </li>
                </div>
            )}
        </ul>
    );
}

export { TodoList };
