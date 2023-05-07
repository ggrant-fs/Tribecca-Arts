import React, { useState } from 'react'
import { Fragment } from 'react'
import Header from '../componenets/Header';
import bannerimg from '../images/signupbanner.jpeg';

const SignUp = () => {
const [newMember,setNewMember] = useState('');

const nameChangeHandler =(event) =>{

 }

 const emailChangeHandler =(event)=>{

 }

 const passwordChangeHandler =(event)=>{

 }

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
          onChange={nameChangeHandler}
          />
        </div>
        <div>
          <input 
          type='email' 
          placeholder='Email'
          onChange={emailChangeHandler}
          />
        </div>
        <div>
          <input 
          type='password' 
          placeholder='Password'
          onChagne={passwordChangeHandler}
          />
        </div>
        <button className='signup__btn'>Sign Up</button>
      </form>
      <div className="signup-banner">
        <img className="signup__banner__img" src={bannerimg} alt=''/>
      </div>
    </Fragment>
  )
}

export default SignUp
