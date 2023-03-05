import React, { useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ sendList }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Input your todo"
        className="input"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button className="add-button" onClick={() => sendList(inputText)}>
        +
      </button>
    </div>
  );
};

export default TodoInput;
