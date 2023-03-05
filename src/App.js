import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// import Typography from '@mui/material/Typography';


function App() {
  const [listTodo, setListTodo] = useState([]);
  console.log("listTodo", listTodo);

  const addList = (inputText) => {
    console.log("inputText", inputText);
    setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    const tempList = [...listTodo];
    tempList.splice(key, 1);
    setListTodo([...tempList]);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <TodoInput sendList={addList} />
        <h1 style={{ color: "white" }}>My Todo's</h1>
      </div>
      {listTodo.map((listItem, index) => {
        return (
          <TodoList
            deleteListItem={deleteListItem}
            deleteKey={index}
            listItem={listItem}
            listIndex={index}
          />
        );
      })}
    </div>
  );
}

export default App;
