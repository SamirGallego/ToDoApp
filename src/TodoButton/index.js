import './TodoButton.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext);
    return (
        <button
            className="create-todo-button"
            onClick={() => setOpenModal(!openModal)
            }
        >
            +
        </button >
    );
}
export { TodoButton };