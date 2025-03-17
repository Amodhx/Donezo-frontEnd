import TaskModel from "../model/TaskModel.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api_call from "../services/ApiCall.ts";

const initialTasks : TaskModel[] = []

export const getTasks = createAsyncThunk(
    'tasks/getTasks',
    async ()=>{
        try {
            // eslint-disable-next-line
            const response:any = await Api_call.getApiCall('/task/getAllTasks');
            return response.data;
        }catch (err) {
            console.log(err)
        }
    }
)
export const saveTask = createAsyncThunk(
    'tasks/saveTask',
    async (task:TaskModel,{rejectWithValue}) =>{
        try {
            // eslint-disable-next-line
            const response : any = await Api_call.postApiCall('/task/saveTask',task)
            return response.data;
        }catch (err){
            return rejectWithValue(err);
        }
    }
)
export const updateTask = createAsyncThunk(
    'task/updateTask',
    async (task:TaskModel,{rejectWithValue}) =>{
        try {
            // eslint-disable-next-line
            const response : any = await Api_call.patchApiCall('/task/updateTask',task);
            return response.data;
        }catch (err){
            return rejectWithValue(err);
        }
    }
)
export const deleteTask = createAsyncThunk(
    'task/deleteTask',
    async (task:TaskModel,{rejectWithValue}) =>{
        try {
            // eslint-disable-next-line
            const response:any = await Api_call.deleteApiCall('/task/deleteTask',task.task_id);
            return response.data;
        }catch (err) {
            return rejectWithValue(err);
        }
    }
)
const taskSlice = createSlice({
    name : 'tasks',
    initialState : initialTasks,
    reducers : {},
    extraReducers : (builder) =>{
        builder
            .addCase(getTasks.fulfilled,(state, action)=>{
                console.log(state)
                return action.payload;
            })
            .addCase(getTasks.pending,(state,action)=>{
                console.log("Pending get Tasks: ", state , action.payload);
            })
            .addCase(getTasks.rejected,(state, action)=>{
                console.error("Failed to get Tasks: ",state,action.payload);
            })
        builder
            .addCase(saveTask.fulfilled,(state, action)=>{
                state.push(action.payload)
            })
            .addCase(saveTask.pending,(state, action)=>{
                console.log("Pending save Task: ", state , action.payload);
            })
            .addCase(saveTask.rejected,(state, action)=>{
                console.error("Failed to save Task: ",state,action.payload);
            })
        builder
            .addCase(updateTask.fulfilled,(state, action)=>{
                const updatedTask:TaskModel = action.payload;
                const index = state.findIndex((task)=> task.task_id === updatedTask.task_id);
                if (index !== -1){
                    state[index] = updatedTask;
                }
            })
            .addCase(updateTask.pending,(state, action)=>{
                console.log("Pending update Tasks: ", state , action.payload);
            })
            .addCase(updateTask.rejected,(state, action)=>{
                console.error("Failed to update Tasks: ",state,action.payload);
            })
        builder
            .addCase(deleteTask.fulfilled,(state, action)=>{
                state = state.filter(task => task.task_id !== action.payload.task_id);
                return state;
            })
            .addCase(deleteTask.pending,(state, action)=>{
                console.log("Pending delete tasks: ", state , action.payload);
            })
            .addCase(deleteTask.rejected,(state, action)=>{
                console.error("Failed to delete tasks: ",state,action.payload);
            })
    }
})

export default taskSlice.reducer;

