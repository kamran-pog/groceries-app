import React, { useState, useEffect } from "react";
import { ShoppingForm } from "./ShoppingForm";
import { v4 as uuidv4 } from "uuid";
import { EditShoppingForm } from "./EditShoppingForm";
import { Shopping } from "./Shopping";
uuidv4();

export const ShoppingWrapper = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    };

    getItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch("https://shopping-backend-711fdc7b0614.herokuapp.com/api/shopping_items");
    const data = await res.json();

    return data;
  };

  const addItem = (item) => {
    setItems([
      ...items,
      { id: uuidv4(), shopping: item, completed: false, isEditing: false },
    ]);
    console.log(items);
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((todo) => todo.id !== id));
  };

  const editItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const editShopping = (shopping, id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, shopping, isEditing: !item.isEditing }
          : item
      )
    );
  };
  return (
    <div className="ToDoWrapper">
      <h1>Groceries!</h1>
      <ShoppingForm addItem={addItem} />
      {items.map((item, index) =>
        item.isEditing ? (
          <EditShoppingForm editItem={editShopping} shopping={item} />
        ) : (
          <Shopping
            shopping={item}
            key={index}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        )
      )}
    </div>
  );
};
