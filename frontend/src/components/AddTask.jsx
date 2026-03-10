import { useState } from "react";
import axios from "axios";

export default function AddTask({ refresh }) {

  const [title, setTitle] = useState("");

  const addTask = async () => {
    try {

      if (!title) return;

      await axios.post("http://localhost:3000/api/tasks", {
        title: title,
        status: "Pending"
      });

      setTitle("");
      refresh();

    } catch (error) {
      console.log("Error adding task:", error);
    }
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

    </div>
  );
}