import { React, useState } from "react";

import "./textArea.css";
import { useDispatch } from "react-redux";
import { addTask } from "./../rtk/taskSlice";

function TextArea() {
  const dispatch = useDispatch();
  const [incrementTask, setIncrementTask] = useState("");
  function handleCLick() {
    const trimmedTask = incrementTask.trim();

    // Check if the trimmed input is not empty
    if (trimmedTask) {
      dispatch(addTask(trimmedTask));
      setIncrementTask("");
    }
  }
  function handleKeyPress(event){
    if (event.key === "Enter")
      // Perform the desired action here
      handleCLick();
  };
  

  return (
    <>
      <input
        aria-label="Set increment amount"
        value={incrementTask}
        placeholder=' "Pin your thoughts, achieve your goals!"
'
        onChange={(e) => setIncrementTask(e.target.value)}
      />
      <button onClick={handleCLick} onKeyPress={handleKeyPress}>
        Add Task
      </button>
    </>
  );
}

export default TextArea;
