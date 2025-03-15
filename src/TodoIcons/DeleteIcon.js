import React from "react";
import { TodoIcons } from "./";

function DeleteIcon(props) {
    return (
        <TodoIcons
            type="delete"
            {...props}
        />
    );
}

export { DeleteIcon };