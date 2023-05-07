import {configureStore} from '@reduxjs/toolkit';
import artReducer from './art';


const store = configureStore({
     reducer:{
        art:artReducer
     }
})


export default store;