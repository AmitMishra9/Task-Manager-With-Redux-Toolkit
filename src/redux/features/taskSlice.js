import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState= {
     tasks:[]
}

export const taskSlice= createSlice({
       name:'task',
       initialState,
       reducers:{
        addTask:(state,action)=>{
            const newTask={
            id: nanoid(),
            title:action.payload.title,
            des:action.payload.des
            }
        state.tasks.push(newTask);
        },
        updateTask:(state,action)=>{
            const {id,title,des}=action.payload;
            const existingTask=state.tasks.find(task=>task.id=== id);

            if(existingTask){
                existingTask.title=title;
                existingTask.des=des;
            }
          },
          removeTask:(state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
          },
        }
       

});
export const {addTask, removeTask,updateTask}=taskSlice.actions;

export default taskSlice.reducer;