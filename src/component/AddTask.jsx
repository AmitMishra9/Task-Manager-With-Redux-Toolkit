import React, { useState } from "react";
import { addTask, removeTask } from "../redux/features/taskSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
function AddTask() {
  const [task, setTask] = useState();
  const [des, setdes] = useState();
  const dispatch = useDispatch();

  const addTaskHandler = (e) => {
    e.preventDefault();
     
     
     const newTask={
        id:nanoid,
        title:task,
        des,
        completed:false
     } 
     
    dispatch(addTask(newTask));
    setTask("");
    setdes('');
  };

//   const removeTaskHandler = (e) => {
//     e.preventDefault();
//     dispatch(removeTask());
//   };

  return (
    <>
      <h1>Add-Task</h1>

      <form onSubmit={addTaskHandler}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Add  Your new Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
          <br></br>
          <br></br>
          <label>Description:</label>
          <textarea
            value={des}
            onChange={(e) => setdes(e.target.value)}
            placeholder="Add Your Description"
            required
          />
          <br></br>
          <br></br>
          <div>
            <button type="submit">Add Task</button>
            {/*<button type="button" onClick={removeTaskHandler}> Remove Task</button> */}
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTask;
