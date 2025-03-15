import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
        editingTodo,
        setEditingTodo,
        updateTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState(editingTodo ? editingTodo.text : '');

    const onSubmit = (event) => {
        event.preventDefault();
        if (editingTodo) {
            updateTodo(editingTodo.text, newTodoValue);
            setEditingTodo(null);
        } else {
            addTodo(newTodoValue);
        }
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
        setEditingTodo(null);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>{editingTodo ? 'Editar ToDo' : 'Nuevo ToDo'}</label>
            <textarea
                placeholder={editingTodo ? 'Edita la tarea' : 'Ingresa tu nueva tarea'}
                className='modal-input'
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button modal-cancel-button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button modal-add-button"
                >
                    {editingTodo ? 'Guardar' : 'Añadir'}
                </button>
            </div>
        </form>
    );
}

export { TodoForm };