import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { search, setSearch } = React.useContext(TodoContext);

    return (
        <input
            className="TodoSearch"
            placeholder="Ingrese su búsqueda"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export { TodoSearch };