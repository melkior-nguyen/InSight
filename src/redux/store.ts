import { configureStore } from "@reduxjs/toolkit";
import reducer from "./ticketslice";

export const store = configureStore({
    reducer: {
        tickets: reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch