import React from 'react';
import { Fragment } from 'react';
import {useState} from 'react';
import SignUpImg from '../images/signupbanner.jpeg';
import Header from '../componenets/Header';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const nameHandler = (event) =>{
    event.preventDefault();
    setName(event.target.value);
  }

  const emailHandler= (event)=>{
    event.preventDefault();
    setEmail(event.target.value);
  }
  
 const passwordHandler = (event) =>{
  event.preventDefault();
  setPassword(event.target.value);
 }

  const submitHander = (event) =>{
   event.preventDefault();
   setName('');
   setEmail('');
   setPassword('');
 }
  return (

    <Fragment>
     <Header/>
      <form onSubmit={submitHander} className='signup-form'>
        <div>
          <input 
          type='text' 
          placeholder='Name'
          value={name}
          onChange={nameHandler}
          required
          />
        </div>
        <div>
          <input 
          type='email' 
          placeholder='Email'
          value={email}
          onChange={emailHandler}
          required
          />
        </div>
        <div>
          <input 
          type='password' 
          placeholder='Password'
          value={password}
          onChange={passwordHandler}
          required
          />
        </div>
        <div className='btn-container'>
          <button type='submit' className='signup__btn'>Sign Up</button>
        </div>
      </form>
      <div className='signup-banner'>
        <img className='signup__banner__img'src={SignUpImg} alt='' />
      </div>
    </Fragment>
  )
}

export default SignUp;