import React from "react";
import './TodosEmpty.css';

function TodosEmpty() {
    return (
        <div className='empty'>
            <p>Ingresa una nueva tarea</p>
        </div>
    );
}

export { TodosEmpty };