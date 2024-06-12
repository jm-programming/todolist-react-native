
import { useState } from 'react';

const useTask = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(todo => todo.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...tasks, text: newText } : task)));
  };

  const handleAddTask = () => {
    addTask(text);
    setText('');
  };


  return {
    tasks,
    addTask,
    deleteTask,
    editTask,
    handleAddTask,
    text,
    setText
  };
};

export default useTask;
