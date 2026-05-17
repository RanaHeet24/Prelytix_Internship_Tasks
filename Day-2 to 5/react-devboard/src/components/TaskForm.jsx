import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) {
      return;
    }

    addTask(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Enter task"
        className="input input-bordered w-full"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="btn btn-success">
        Add
      </button>
    </form>
  );
}

export default TaskForm;