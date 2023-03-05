import React from "react";
import "./TodoList.css";
import { AccessAlarms } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'

const TodoList = ({ deleteListItem, deleteKey, listItem, listIndex }) => {
  return (
    <div className="list-container">
      <div className="display-list-item">
        <li className="list-item">{listItem}</li>
      </div>
      <div className="delete-button">
        <AccessAlarms onClick={() => deleteListItem(deleteKey)}/>
      </div>
    </div>
  );
};

export default TodoList;
