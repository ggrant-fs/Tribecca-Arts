import React, { useState } from 'react';
import { Fragment } from 'react';
import SignUpImg from '../images/signupbanner.jpeg';
import Header from '../componenets/Header';
const SignUp = () => {
  const [newMember,setNewMember] = useState('');


 const onSubmitHander = (event) =>{
  event.preventDefault();
 }
  return (

    <Fragment>
     <Header/>
      <form onSubmit={onSubmitHander} className='signup-form'>
        <div>
          <input 
          type='text' 
          placeholder='Name'
          />
        </div>
        <div>
          <input 
          type='email' 
          placeholder='Email'
          />
        </div>
        <div>
          <input 
          type='password' 
          placeholder='Password'
          />
        </div>
        <button className='signup__btn'>Sign Up</button>
      </form>
      <div className='signup-banner'>
        <img className='signup__banner__img'src={SignUpImg} alt='' />
      </div>
    </Fragment>
  )
}

export default SignUp;