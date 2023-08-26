import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Shopping = ({ shopping, toggleComplete, deleteItem, editItem}) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(shopping.id)}
        className={`${shopping.completed ? 'completed' : ""}`}
      >
        {shopping.shopping}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editItem(shopping.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(shopping.id)} />
      </div>
    </div>
  );
};
