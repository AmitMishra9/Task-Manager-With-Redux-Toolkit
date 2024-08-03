import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeTask} from "../redux/features/taskSlice";
import { updateTask } from "../redux/features/taskSlice";
function DisplayTask() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isUpdating, setUpdating] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    id: "",
    title: "",
    des: "",
  });


const handleUpdate=(task)=>{
    setUpdating(true);
    setCurrentTask({
      id:task.id,
      title:task.title,
      des:task.des,
    });
};

const handInputChange=(e)=>{
    const {name,value}=e.target;

    setCurrentTask({
      ...currentTask,
      [name]:value,
    });
};

 const handleUpdateSubmit=(e)=>{
   e.preventDefault();
    console.log("Clicked");
   dispatch(updateTask(currentTask));
   setUpdating(false);
   setCurrentTask({
      id:"",
      title:"",
      des:" ",
   });
}


  return (

    <>
      <h1>Task</h1>
        
       
      {tasks &&
        tasks.map((task) => (
          <div  key={task.id}  className="items">
             { isUpdating && currentTask.id==task.id ?(
                <form onSubmit={handleUpdateSubmit}>
              
               <input type ="text" 
               name="title"
               value={currentTask.title}
               onChange={handInputChange}
               required/>
                <input type ="text" 
               name="des"
               value={currentTask.des}
               onChange={handInputChange}
               required/>
                <button type="submit">Update</button>
                <button onClick={()=>setUpdating(false)}>Cancle</button>
                 </form>
                ):(
                <>
                <h3>{task.title}</h3>
                <p>{task.des}</p>
    
                <div className="buttons">  
                <button onClick={()=> handleUpdate(task)}>Edite</button>
        
                  <button  onClick={() => {
                         dispatch(removeTask(task.id));
                    }}>Remove</button>
                </div>
                </>
              )}
          </div>
        ))}
    </>
  );
}

export default DisplayTask;
