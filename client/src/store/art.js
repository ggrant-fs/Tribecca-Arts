import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    art:[],
    loading:false,
    error:null
}

const artSlice = createSlice({
   name:"art",
   initialState,
   reducers:{
   
    getArtwork:(state,action)=>{
        state.art = action.payload;
    }
   }
})


export default artSlice.reducer