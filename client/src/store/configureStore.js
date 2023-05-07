import {configureStore} from '@reduxjs/toolkit';
import artReducer from './art';
import signUpReducer from './signUp';


const store = configureStore({
     reducer:{
        art:artReducer,
        signup: signUpReducer
     }
})


export default store;