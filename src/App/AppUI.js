import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoButton } from '../TodoButton';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import './App.css';
import React from 'react';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        toDoCompleted,
        toDoDelete,
        openModal,
        updateTodo
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <div className='container'>
                <div className="header">
                    <h1 className="title">ToDo App</h1>
                    <div className="title-underline"></div>
                </div>

                <TodoCounter />

                <TodoSearch />

                <TodoContext.Consumer>
                    {() => (
                        <TodoList className="todo-list-container">
                            {loading && <TodosLoading />}
                            {error && <TodosError />}
                            {(!loading && !searchedTodos.length) && <TodosEmpty />}

                            {searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => { toDoCompleted(todo.text) }}
                                    onDelete={() => { toDoDelete(todo.text) }}
                                    updateTodo={() => { updateTodo(todo.text) }}
                                />
                            ))}
                        </TodoList>
                    )}
                </TodoContext.Consumer>

                <TodoButton />

                {openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
            </div>
        </React.Fragment>
    );
}

export { AppUI };