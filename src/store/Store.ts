import {configureStore} from "@reduxjs/toolkit";
import taskSlices from "../reducers/TaskSlices.ts";
import noteSlices from "../reducers/NoteSlices.ts";

export const store = configureStore({
    reducer: {
        tasks : taskSlices,
        notes : noteSlices
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;