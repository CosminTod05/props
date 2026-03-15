import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTask(inputValue);
      setInputValue(''); // Limpiamos el input después de añadir
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Añadir una nueva tarea" 
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddTaskForm;
