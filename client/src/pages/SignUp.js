import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {newUser} from '../store/signUp';
import SignUpImg from '../images/signupbanner.jpeg';
import Header from '../componenets/Header';


const SignUp = () => {
  const [signup,setSignup] = useState({
      name:"",
      email:"",
      password:""
  });
 
  const {name,email,password} = signup;

  const dispatch = useDispatch();

  const onSubmitHander = (event) =>{
   event.preventDefault();
   dispatch(newUser({signup: signup}))
 }
  return (

    <Fragment>
     <Header/>
      <form onSubmit={onSubmitHander} className='signup-form'>
        <div>
          <input 
          type='text' 
          placeholder='Name'
          value={name}
          //onchange
          />
        </div>
        <div>
          <input 
          type='email' 
          placeholder='Email'
          value={email}
          //onchange
          />
        </div>
        <div>
          <input 
          type='password' 
          placeholder='Password'
          value={password}
          //onchange
          />
        </div>
        <button type='submit' className='signup__btn'>Sign Up</button>
      </form>
      <div className='signup-banner'>
        <img className='signup__banner__img'src={SignUpImg} alt='' />
      </div>
    </Fragment>
  )
}

export default SignUp;