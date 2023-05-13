import {configureStore} from '@reduxjs/toolkit';
import artReducer from './art';
import signUpReducer from './signUp';
// import ticketReducer from './ticket';
import api from './middleware/api';


const store = configureStore({
     reducer:{
        art:artReducer,
        signup: signUpReducer,
      //   ticket: ticketReducer
     },
     middleware:[api]
})


export default store;