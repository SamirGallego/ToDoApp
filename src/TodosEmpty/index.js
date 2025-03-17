import React from "react";
import './TodosEmpty.css';

function TodosEmpty() {
    return (
        <div className='empty'>
            <div className="icon">📝</div>
            <p>¡Escribe tu primer ToDo!</p>
        </div>
    );
}

export { TodosEmpty };