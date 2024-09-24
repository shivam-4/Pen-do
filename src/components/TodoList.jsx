import React from "react";
import "./todolist.css";
import { useSelector, useDispatch } from "react-redux";
import {  removeTask } from "./../rtk/taskSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskl.taskList);
  const storage = localStorage.getItem(taskList);

 
  return (
    <ul>
      {taskList.map((task, index) => (
        <li key={index} className="task-item">
          <span className="circle pin">📌</span>
          <div className="task-content">{task}</div>
          <button
            className="circle delButton"
            onClick={() => dispatch(removeTask(index))}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
