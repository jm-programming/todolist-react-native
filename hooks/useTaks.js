import React, { useState } from "react";
import { Keyboard } from "react-native";

const useTaks = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return {
    handleAddTask,
    completeTask,
    taskItems,
    task,
    setTask,
    setTaskItems,
  };
};

export default useTaks;
