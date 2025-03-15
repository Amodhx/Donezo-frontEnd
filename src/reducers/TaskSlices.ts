import TaskModel from "../model/TaskModel.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialTasks : TaskModel[] = []

const taskSlice = createSlice({
    name : 'tasks',
    initialState : initialTasks,
    reducers : {
        addTask : (state,action)=>{
            state.push(action.payload)
        },
        updateTask : (state,action)=>{
            const index = state.findIndex(task => task.task_id === action.payload.task_id);
            if (index !== -1) {
                state[index] = action.payload; // Update the task
            }
        },
        deleteTask : (state,action)=>{
            return state.filter(task => task.task_id !== action.payload.task_id);
        }
    }
})

export const { addTask,updateTask,deleteTask } = taskSlice.actions;
export default taskSlice.reducer;

