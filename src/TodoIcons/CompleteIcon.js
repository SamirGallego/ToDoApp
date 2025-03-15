import React from "react";
import { TodoIcons } from "./";

function CompleteIcon(props) {
    return (
        <TodoIcons
            type="complete"
            colorStroke="currentColor"
            onClick={props.onClick}
            {...props}
        />
    );
}
export { CompleteIcon };