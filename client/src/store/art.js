import { createSlice } from "@reduxjs/toolkit";
import {apiCall} from './api';

const initialState = {
    art :[],
    loading: false,
    error: null
}

const artSlice = createSlice({
    name:"art",
    initialState,
    reducers:{
        apiRequest:(state,action) =>{
            state.loading = true;
        },

        apiRequestFailed:(state,action) =>{
            state.loading = false;
        },

        getArt:(state,action) =>{
            state.art = action.payload;
            state.loading = false
        }
    }
})

export  default artSlice.reducer

const url = '/art';

//action creators

//get request