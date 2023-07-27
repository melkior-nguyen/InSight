import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { db } from "../firebase/config"
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore"
import { dataType } from "../testdata"

//get ticketfamillyref
const ticketFamillyRef = collection(db, 'familly')
//get ticketeventref
const ticketEventRef = collection(db, 'event')
//get packmanagerRef
const packManagerRef = collection(db, 'pack_manager')

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
export const fetchPackManager = createAsyncThunk(
    'tickets/fetchPackManager',
    async () => {
        const snapshot = await getDocs(packManagerRef)
        const packList = snapshot.docs.map((doc: any) => ({ ...doc.data() }))
        return packList
    })

// add doc to collection
export const addFamillyTickets = createAsyncThunk(
    'tickets/addFamillyTickets',
    async (newTickets: any) => {
        await addDoc(ticketFamillyRef, newTickets)
        return newTickets
    }
)
export const addEventTickets = createAsyncThunk(
    'tickets/addEventTickets',
    async (newTickets: any) => {
        await addDoc(ticketEventRef, newTickets)
        return newTickets
    }
)
// update doc to pack manager
export const updatePackManager = createAsyncThunk(
    'ticket/updatePackManager',
    async (updatedPack: any) => {
        console.log(updatedPack)
        const snapshot = await getDocs(packManagerRef)
        //get id from docs
        const packIdList: any[] = []
        snapshot.forEach(doc => packIdList.push(doc.id))
        // update with id index
        const currDoc = doc(db, 'pack_manager', packIdList[updatedPack.index])
        await updateDoc(currDoc, updatedPack)
        return updatedPack
    }
)

// Tickets Slice
const ticketSlice = createSlice({
    name: 'tickets',
    initialState: {
        ticketsFamillyList: [] as dataType[],
        ticketsEventList: [] as dataType[],
        packManager: [] as any[],
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
            .addCase(fetchPackManager.fulfilled, (state, action) => {
                state.packManager = action.payload
            })
            .addCase(addFamillyTickets.fulfilled, (state, action) => {
                state.ticketsFamillyList.push(action.payload)
            })
            .addCase(addEventTickets.fulfilled, (state, action) => {
                state.ticketsEventList.push(action.payload)
            })
            .addCase(updatePackManager.fulfilled, (state, action) => {
                const updatePack = { ...action.payload }
                delete updatePack.index
                state.packManager[action.payload.index] = updatePack
            })
            .addCase(fetchFamillyTickets.rejected, (state, action) => {
                console.error('Có lỗi xảy ra')
            })
            .addCase(fetchEventTickets.rejected, (state, action) => {
                console.error('Có lỗi xảy ra')
            })
            .addCase(fetchPackManager.rejected, (state, action) => {
                console.error('Có lỗi xảy ra')
            })
            .addCase(addFamillyTickets.rejected, (state, action) => {
                console.error('Có lỗi xảy ra')
            })
            .addCase(addEventTickets.rejected, (state, action) => {
                console.error('Có lỗi xảy ra')
            })
            .addCase(updatePackManager.rejected, (state, action) => {
                console.error('Có lỗi xảy ra')
            })
    }
})



const { actions, reducer } = ticketSlice
export default reducer
