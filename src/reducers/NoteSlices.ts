import NoteModel from "../model/NoteModel.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api_call from "../services/ApiCall.ts";

const initialNotes:NoteModel[] = []
export const getNotes = createAsyncThunk(
    'notes/getNotes',
    async ()=>{
        try {
            // eslint-disable-next-line
            const response: any = await Api_call.getApiCall('');
            return response.data;
        }catch (e) {
            console.log(e)
        }
    }
)
export const saveNote = createAsyncThunk(
    'notes/saveNote',
    async (note:NoteModel,{rejectWithValue})=>{
        try {
            const formData = new FormData();
            formData.append("note_id",note.note_id)
            formData.append("note_title",note.note_title)
            formData.append("note_content",note.note_content)
            if (note.image){
                formData.append("image",note.image)
            }
            // eslint-disable-next-line
            const response:any =  await Api_call.postApiCallWithFromData('', formData);
            return  response.data;
        }catch (e) {
            return  rejectWithValue(e);
        }
    }
)
export const updateNote = createAsyncThunk(
    'notes/updateNote',
    async (note:NoteModel,{rejectWithValue})=>{
        try {
            const formData = new FormData();
            formData.append("note_id",note.note_id)
            formData.append("note_title",note.note_title)
            formData.append("note_content",note.note_content)
            if (note.image){
                formData.append("image",note.image)
            }
            // eslint-disable-next-line
            const response:any = await Api_call.patchApiCallWithFormData('',formData);
            return  response.data;
        }catch (e) {
            return rejectWithValue(e);
        }
    }
)
export const deleteNote = createAsyncThunk(
    'notes/deleteNote',
    async (note:NoteModel,{rejectWithValue})=>{
        try {
            // eslint-disable-next-line
            const response:any = await Api_call.deleteApiCall('', note.note_id);
            return  response.data;
        }catch (e) {
            return rejectWithValue(e);
        }
    }
)


const noteSlice = createSlice({
    name : 'notes',
    initialState : initialNotes,
    reducers : {},
    extraReducers : (builder) =>{
        builder
            .addCase(getNotes.fulfilled,(state, action)=>{
                console.log(state)
                return action.payload;
            })
            .addCase(getNotes.pending,(state,action)=>{
                console.log("Pending get Notes: ", state , action.payload);
            })
            .addCase(getNotes.rejected,(state, action)=>{
                console.error("Failed to get notes: ",state,action.payload);
            })
        builder
            .addCase(saveNote.fulfilled,(state, action)=>{
                state.push(action.payload)
            })
            .addCase(saveNote.pending,(state, action)=>{
                console.log("Pending save Notes: ", state , action.payload);
            })
            .addCase(saveNote.rejected,(state, action)=>{
                console.error("Failed to save notes: ",state,action.payload);
            })
        builder
            .addCase(updateNote.fulfilled,(state, action)=>{
                const updatedNote:NoteModel = action.payload;
                const index = state.findIndex((note)=> note.note_id === updatedNote.note_id);
                if (index !== -1){
                    state[index] = updatedNote;
                }
            })
            .addCase(updateNote.pending,(state, action)=>{
                console.log("Pending update Notes: ", state , action.payload);
            })
            .addCase(updateNote.rejected,(state, action)=>{
                console.error("Failed to update notes: ",state,action.payload);
            })
        builder
            .addCase(deleteNote.fulfilled,(state, action)=>{
                state = state.filter(note => note.note_id !== action.payload.note_id);
                return state;
            })
            .addCase(deleteNote.pending,(state, action)=>{
                console.log("Pending delete Notes: ", state , action.payload);
            })
            .addCase(deleteNote.rejected,(state, action)=>{
                console.error("Failed to delete notes: ",state,action.payload);
            })
    }
})

export default noteSlice.reducer;