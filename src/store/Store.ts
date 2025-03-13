import {configureStore} from "@reduxjs/toolkit";
import taskSlices from "../reducers/TaskSlices.ts";

export const store = configureStore({
    reducer: {
        tasks : taskSlices
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;