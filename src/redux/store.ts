import { configureStore } from "@reduxjs/toolkit";
import reducer from "./ticketslice";

export const store = configureStore({
    reducer: {
        tickets: reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>