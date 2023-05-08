import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import artReducer from './art';
import signUpReducer from './signUp';
import api from './middleware/api';


const store = configureStore({
     reducer:{
        art:artReducer,
        signup: signUpReducer
     },
     middleware:(getDefaultMiddleware)=>[
      ...getDefaultMiddleware,
      api
     ]
})


export default store;