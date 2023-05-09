import { createSlice } from "@reduxjs/toolkit";
import {apiCall} from './api';

const initalState = {
    ticket :[],
    loading:false,
    error:null
}

//react-redux slice
const ticketSlice = createSlice({
    name:"ticket",
    initalState,
    reducers:{
        createTicket:(state,action) =>{
            state.ticket.push(action.payload);
        },

        removeTicket:(state,action) =>{
            const index = state.ticket.findIndex(ticket => ticket.id = action.payload.id)
            state.ticket.splice(index,1);
        }
    }
})

export const {createTicket,removeTicket} = ticketSlice.actions
export default ticketSlice.reducer


const url = '/ticket';

//Action Creators: 
//=====post request=======//
export const purchaseTicket =(ticket)=>apiCall({
    url,
    method:'POST',
    data:ticket,
    onSuccess:createTicket.type
})
//=====delete request=======//
export const deleteTicket=(ticket)=>apiCall({
    url:`${url}/${ticket.id}`,
    method:'POST',
    onSuccess:removeTicket.type
})