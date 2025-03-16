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
            const index = state.findIndex(note => note.note_id === action.payload.note_id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteNote : (state,action) =>{
            return state.filter(note => note.note_id !== action.payload.note_id);
        }
    }
})
export const {addNote, updateNote,deleteNote} = noteSlice.actions;
export default noteSlice.reducer;