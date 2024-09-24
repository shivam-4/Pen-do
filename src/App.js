// App.js
import React from "react";
import "./App.css"; // For styling
import TextArea from "./components/TextArea.jsx";
import TodoList from "./components/TodoList.jsx";

const App = () => {
  return (
    
      <div className="app">
        <div className="heading"><h1>📌 PEN YOUR THOUGHTS</h1></div>
        <div className="container">
          <div className="left-panel">
            <TextArea />
          </div>
          <div className="right-panel">
            <TodoList />
          </div>
        </div>
      </div>
   
  );
};

export default App;
