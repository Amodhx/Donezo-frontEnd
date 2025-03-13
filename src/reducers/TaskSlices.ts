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

        },
        deleteTask : (state,action)=>{

        }
    }
})

export const { addTask,updateTask,deleteTask } = taskSlice.actions;
export default taskSlice.reducer;

