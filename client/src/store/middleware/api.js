import axios from 'axios';
import {apiCall} from '../api';

const api = ({dispatch}) => next => async action =>{
    if(action.type !== apiCall.type){
        return next(action);
    }

    const {
        url,
        method,
        data,
        // onStart,
        onSuccess,
        // onError
    } = action.payload;

    try{
        const response = await axios.request({
            baseURL:'https://jsonplaceholder.typicode.com/posts/1/comments',
            url,
            method,
            data
        })
    
        dispatch({type: onSuccess, payload:response.data})

    }catch(error){

    }

}


export default api;