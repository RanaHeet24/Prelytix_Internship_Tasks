import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div className="space-y-4">
      {
        tasks.length === 0 ? (
          <p className="text-center text-gray-500">
            No tasks available
          </p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))
        )
      }
    </div>
  );
}

export default TaskList;