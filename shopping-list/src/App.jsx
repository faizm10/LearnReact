"use client";
// Step 4. Import React and useState
import React, { useState } from "react";
import "./App.css";

// Step 6. Create a functional component called App
export default function App() {
  // Step 8a. Initialize useState state variables
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Step 8b. Create arrow function 'handleInputChange to store the current user input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Step 9. Create arrow function 'handleAddTask' to add tasks to the list
  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  // Step 11. Create arrow function 'handleDeleteTask' with parameter 'index' to delete tasks
  const handleDeleteTask = (index) => {
    // Step 11a. Create a new list of items to keep
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // Step 11b. Set the list to our new list
    setTasks(updatedTasks);
  };

  // Step 7. Return the JSX for the App component
  return (
    <div className="list" >
      {/* Step 7a. Create a site header */}
      <h1>Shopping List</h1>
      {/* Step 7b. Input field for adding items */}
      <div className="input">
        <input
          type="text"
          value={inputValue} // using state
          onChange={handleInputChange} // calls handleInputChange on input change
          placeholder="Enter an item"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      {/* Step 10. Display the shopping list array */}
      <ul>
        {tasks.map((task, index) => (
          // Step 10a. Iterate over every task and retrieve its index
          <li key={index} className="task-item">
            {task}
            <div className="task-actions">
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
