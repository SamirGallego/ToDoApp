import './TodoItem.css';
import { CompleteIcon } from '../TodoIcons/CompleteIcon';
import { DeleteIcon } from '../TodoIcons/DeleteIcon';
import { TodoContext } from '../TodoContext';
import React from 'react';

function TodoItem({ text, completed, onComplete, onDelete }) {
    const { setOpenModal, setEditingTodo } = React.useContext(TodoContext);

    const handleTextClick = () => {
        setEditingTodo({ text, completed });
        setOpenModal(true);
    };

    return (
        <li
            className={`todo-item ${completed ? 'completed' : ''}`}
            data-text={text}
        >
            <CompleteIcon
                onClick={onComplete}
            />
            <p
                className="todo-item-text"
                onClick={handleTextClick}
                style={{ cursor: 'pointer' }}
            >{text}</p>
            <DeleteIcon
                className="todo-item-delete"
                onClick={onDelete}
            />
        </li>
    );
}

export { TodoItem };