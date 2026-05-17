function TaskCard({ task, deleteTask, toggleComplete }) {
  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body flex-row justify-between items-center">
        <h2
          className={
            task.completed
              ? "line-through text-green-500 font-semibold"
              : "font-semibold"
          }
        >
          {task.text}
        </h2>

        <div className="flex gap-2">
          <button
            className="btn btn-info btn-sm"
            onClick={() => toggleComplete(task.id)}
          >
            Done
          </button>

          <button
            className="btn btn-error btn-sm"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;