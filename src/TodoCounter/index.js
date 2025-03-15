import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    let message;
    if (totalTodos === 0) {
        message = <h2>¡No hay tareas!</h2>;
    }
    else if (completedTodos !== 0 && completedTodos === totalTodos) {
        message = <h2 className='completeText'>¡Has completado todas las tareas!</h2>;
    } else {
        message = (
            <h2>
                Has completado <span className='todoCounter-complete'>{completedTodos}</span> de <span className='todoCounter-total'>{totalTodos}</span> tareas
            </h2>
        );
    }

    return (
        <div>
            {message}
        </div>
    );
}

export { TodoCounter };