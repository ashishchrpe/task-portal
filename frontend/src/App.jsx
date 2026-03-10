import { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

   
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

 
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Task Management Portal</h1>

     
      <AddTask refresh={fetchTasks} />

      
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Pending")} style={{ marginLeft: "10px" }}>
          Pending
        </button>
        <button onClick={() => setFilter("Completed")} style={{ marginLeft: "10px" }}>
          Completed
        </button>
      </div>

  
      <TaskList tasks={filteredTasks} refresh={fetchTasks} />
    </div>
  );
}

export default App;