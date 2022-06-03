import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Todo() {
  const [inputData, setInput] = React.useState("");
  const [items, setItems] = React.useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      // console.log(items);
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="red"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </p>
              </div>
            );
          })}
        </div>
        <button
          className={items.length > 0 ? "remove-all-btn" : "hide-rem-all-btn"}
          onClick={removeAllItems}
        >
          Remove all
        </button>
      </div>
    </>
  );
}
