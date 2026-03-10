import axios from "axios";

export default function TaskList({ tasks, refresh }) {
  const toggle = async (id) => {
    await axios.put(
      `http://localhost:3000/api/tasks/${id}`
    );

    refresh();
  };

  return (
    <>
      {tasks.map((t) => (
        <div key={t._id}>
          <h3>{t.title}</h3>
          <p>{t.status}</p>
          <button onClick={() => toggle(t._id)}>
            Toggle
          </button>
        </div>
      ))}
    </>
  );
}