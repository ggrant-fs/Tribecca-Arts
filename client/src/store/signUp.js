import { createSlice } from "@reduxjs/toolkit";
import {apiCall} from './api';

const initialState ={
    signup:[],
    loading:false,
    error:null
}

//react-redux slice
const signUpSlice = createSlice({
    name:"signup",
    initialState,
    reducers:{
        createUser:(state,action) =>{
            state.signup.push(action.payload);
        }
    }
})

const {createUser} = signUpSlice.actions;
export default signUpSlice.reducer

const url = '/signup';

//Action Creator: 
//=====post request=======//
export const newUser = (signup) => apiCall({
        url,
        method:"POST",
        data:signup,
        onSuccess:createUser.type
})