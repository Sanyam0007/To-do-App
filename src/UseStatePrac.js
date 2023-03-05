import React, { useState } from "react";

const UseStatePrac = () => {
  const [text, setText] = useState();
  function onChange(event) {
    const newText = event.target.value;
    setText(newText);
  }
  return (
    <div>
      <input placeholder="type here...." type="text" onChange={onChange} />
      <h1>{text}</h1>
    </div>
  );
};

export default UseStatePrac;
