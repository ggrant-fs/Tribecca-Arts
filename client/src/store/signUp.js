import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    signup:[],
}

const signUpSlice = createSlice({
    name:"signup",
    initialState,
    reducers:{
        createUser:(state,action) =>{
            state.signup.push(action.payload);
        }
    }
})

export default signUpSlice.reducer