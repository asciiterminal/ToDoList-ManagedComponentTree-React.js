import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  // const [inputText, setInputText] = useState("");
  //We will move this to InputArea.jsx
  const [items, setItems] = useState([]);

  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   setInputText(newValue);
  // }
  //We will move this to InputArea.jsx

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    // setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
