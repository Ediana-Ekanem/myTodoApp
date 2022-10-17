import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { db } from "./components/firebase_config";
import firebase from "firebase/compat/app";
import { TodoListItem } from "./components/Todo";

const MainView = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []); //run only on first launch

  const getTodos = () => {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };

  const addTodo = (e) => {
    e.preventDefault(); //prevents submit from relaoding
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  };

  //   Trying to sort
  //   const orderedTodos = todos
  //     .slice()
  //     .sort((a, b) => a.timestamp.localeCompare(b.timestamp));

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>ED'S Todo App 🔥</h1>

      <form style={{ display: "flex" }}>
        <div>
          <TextField
            id="standard-basic"
            label="Add a Todo"
            variant="standard"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            style={{ width: "90vw", maxWidth: "400px" }}
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Add Todo
          </Button>
        </div>
      </form>
      <div style={{ width: "90vw", maxWidth: "400px" }}>
        {todos.map((todo) => (
          <TodoListItem
            todo={todo.todo}
            inprogress={todo.inprogress}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MainView;
