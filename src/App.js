import React, { useState } from "react";
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [newImage, setNewImage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setItems([...items, {text:newItem, img:newImage}]);
    setNewItem("");
    setNewImage("");
  };

  const handleDelete = index => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add an item..."
          value={newItem}
          onChange={event => setNewItem(event.target.value)}
        />
        <input
          type="text"
          placeholder="Add an image url..."
          value={newImage}
          onChange={event => setNewImage(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img src={item.img} alt={item.text} />
            {item.text}
            <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
