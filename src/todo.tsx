import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Todo() {
  const [inputData, setInput] = React.useState("");
  const [items, setItems] = React.useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      console.log(items);
      setItems([...items, inputData]);
      setInput("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const deleteItem = (id: number) => {
    const updatedItems = items.filter((element, index) => {
      return index !== id;
    });
    setItems(updatedItems);
    setInput("");
  };

  const removeAllItems = () => {
    return setItems([]);
  };

  return (
    <>
      <div className="todo-app">
        <input
          value={inputData}
          className="input-todo"
          type="text"
          placeholder="Type todo here "
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyPress={handleEnter}
        />
        <button className="add-todo" onClick={addItem}>
          Add Todo
        </button>
        <div className="items">
          {items.map((element, index) => {
            return (
              <div key={index}>
                <p className="item">
                  {element}
                  <button
                    className="delete-todo-btn"
                    onClick={() => deleteItem(index)}
                  >
                    Del
                    {/* <img src="./icons/delete.jpg" alt="Delete" /> */}
                  </button>
                </p>
              </div>
            );
          })}
        </div>
        <button
          className={items.length > 0 ? "remove-all-btn" : "hide-rem-btn"}
          onClick={removeAllItems}
        >
          Remove all
        </button>
      </div>
    </>
  );
}
