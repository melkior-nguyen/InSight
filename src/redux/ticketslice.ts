import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { db } from "../firebase/config"
import { collection, getDocs, addDoc } from "firebase/firestore"
import { dataType } from "../testdata"

//get ticketfamillyref
const ticketFamillyRef = collection(db, 'familly')
//get ticketeventref
const ticketEventRef = collection(db, 'event')

// fetch collection data
export const fetchFamillyTickets = createAsyncThunk(
    'tickets/fetchFamillyTickets',
    async () => {
        const snapshot = await getDocs(ticketFamillyRef)
        const ticketsList = snapshot.docs.map((doc: any) => ({ ...doc.data() }))
        return ticketsList
    })
export const fetchEventTickets = createAsyncThunk(
    'tickets/fetchEventTickets',
    async () => {
        const snapshot = await getDocs(ticketEventRef)
        const ticketsList = snapshot.docs.map((doc: any) => ({ ...doc.data() }))
        return ticketsList
    })
// add doc to collection

export const addFamillyTickets = createAsyncThunk(
    'tickets/addFamillyTickets',
    async (newTickets:any)=> {
        await addDoc(ticketFamillyRef, newTickets)
        return newTickets
    }
)
export const addEventTickets = createAsyncThunk(
    'tickets/addEventTickets',
    async (newTickets:any)=> {
        await addDoc(ticketEventRef, newTickets)
        return newTickets
    }
)




// Tickets Slice
const ticketSlice = createSlice({
    name: 'tickets',
    initialState: {
        ticketsFamillyList: [] as dataType[],
        ticketsEventList: [] as dataType[],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFamillyTickets.fulfilled, (state, action) => {
                state.ticketsFamillyList = action.payload
            })
            .addCase(fetchEventTickets.fulfilled, (state, action) => {
                state.ticketsEventList = action.payload
            })
            .addCase(addFamillyTickets.fulfilled, (state, action)=> {
                state.ticketsFamillyList.push(action.payload)
            })
            .addCase(addEventTickets.fulfilled, (state, action)=> {
                state.ticketsEventList.push(action.payload)
            })
    }
})

const { actions, reducer } = ticketSlice
export default reducer
