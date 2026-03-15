const Task = ({ task, deleteTask, toggleTask }) => {
  return (
    <div className="task-item">
      <span 
        onClick={() => toggleTask(task.id)}
        style={{ 
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
};

export default Task;
