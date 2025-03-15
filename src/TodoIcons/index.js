import { ReactComponent as DeleteIcon } from "./delete.svg";
import { ReactComponent as CompleteIcon } from "./check.svg";
import React from "react";

const iconTypes = {
    "complete": CompleteIcon,
    "delete": DeleteIcon
};

function TodoIcons({ type, colorStroke, onClick, ...props }) {
    const IconComponent = iconTypes[type];
    return (
        <span className={`todo-item-${type}`}
            onClick={onClick}
            style={{
                cursor: 'pointer'
            }}
        >
            <IconComponent stroke={colorStroke} {...props} />
        </span>
    );
}

export { TodoIcons };