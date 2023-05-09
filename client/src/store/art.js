import { createSlice } from "@reduxjs/toolkit";
import {apiCall} from './api';

const initialState = {
    art :[],
    loading: false,
    error: null
}

//react-redux slice
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

const {apiRequest,apiRequestFailed,getArt} = artSlice.actions
export  default artSlice.reducer

const url = '/art';

//Action Creators 
//=====Get request=======//
export const loadArt = () => apiCall({
    url,
    onStart: apiRequest.type,
    onSuccess: getArt.type,
    onError: apiRequestFailed
})