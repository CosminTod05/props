import { useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  // Función para añadir una nueva tarea
  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Función para eliminar una tarea
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Función para marcar como completada o no
  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      {/* Pasamos la función addTask al componente AddTaskForm */}
      <AddTaskForm addTask={addTask} />
      
      <div className="task-list">
        {tasks.map(task => (
          /* Pasamos las propiedades y funciones al componente Task */
          <Task 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            toggleTask={toggleTask} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
