import React from 'react';
import { TodoContext } from '../TodoContext';
import './DeleteConfirmation.css';

function DeleteConfirmation() {
    const {
        setOpenModal,
        toDoDelete,
        setEditingTodo,
        editingTodo
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        toDoDelete(editingTodo.text);
        setOpenModal(false);
        setEditingTodo(null);
    };

    const onCancel = () => {
        setOpenModal(false);
        setEditingTodo(null);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>¿Desea eliminar el ToDo?</label>
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
                    Confirmar
                </button>
            </div>
        </form>
    );
}

export { DeleteConfirmation };