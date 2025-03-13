import NoteModel from "../model/NoteModel.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialNotes:NoteModel[] = []

const noteSlice = createSlice({
    name : 'notes',
    initialState : initialNotes,
    reducers : {
        addNote : (state,action) =>{
            state.push(action.payload)
        },
        updateNote : (state,action) =>{
            console.log(state,action)
        },
        deleteNote : (state,action) =>{
            console.log(state,action)
        }
    }
})
export const {addNote, updateNote,deleteNote} = noteSlice.actions;
export default noteSlice.reducer;