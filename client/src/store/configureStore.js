import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import artReducer from './art';
import signUpReducer from './signUp';
import ticketReducer from './ticket';
import api from './middleware/api';


const store = configureStore({
     reducer:{
        art:artReducer,
        signup: signUpReducer,
        ticket: ticketReducer
     },
     middleware:(getDefaultMiddleware)=>[
      ...getDefaultMiddleware,
      api
     ]
})


export default store;