import React, { useState } from "react";

export const EditShoppingForm = ({ editItem, shopping }) => {
  const [value, setValue] = useState(shopping.shopping);

  const handleSubmit = (e) => {
    e.preventDefault();

    editItem(value, shopping.id);

    setValue("");
  };
  return (
    <form className="ShoppingForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="shopping-input"
        value={value}
        placeholder="Update Item"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
