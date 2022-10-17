import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { db } from "./firebase_config";

export const TodoListItem = ({ todo, inprogress, id }) => {
  const toggleInProgress = () => {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  };

  const deleteTodo = () => {
    db.collection("todos").doc(id).delete();
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <ListItem>
          <ListItemText
            primary={todo}
            secondary={inprogress ? "In Progress 👍" : "Completed ✅"}
          />
        </ListItem>
      </div>
      <div>
        <Button
          onClick={toggleInProgress}
          variant="text"
          style={{ marginTop: "20px" }}
        >
          {inprogress ? "Done" : "UnDone"}
        </Button>
        <Button
          onClick={deleteTodo}
          variant="text"
          style={{ marginTop: "20px" }}
        >
          X
        </Button>
      </div>
    </div>
  );
};
