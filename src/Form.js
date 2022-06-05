import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {FaFacebook, FaGooglePlusG, FaLinkedin} from 'react-icons/fa';



const Form = ({setUser}) => {

    const [name, setName] = useState('');
   const [email, setEmail] = useState('')

   const navigate = useNavigate();

   const handleSubmit = (e) => {
     e.preventDefault();
     if(!name || !email) return;
     setUser({name:name, email:email})
     navigate('/dashboard');
     
   }


  return <>
  
  <div className='form-center'>

    <div className='form-area'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login to Your Account</h1>
        <p>Login using social networks</p>
        <button className="social-icon"><FaFacebook/></button>
        <button className="social-icon"><FaGooglePlusG/></button>
        <button className="social-icon"><FaLinkedin/></button>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Sign in
        </button>
      </form>
    </div>
      <div className='register-area'>
       <h1>New Here?</h1>
       <p reg-p>Sign up and discover a great amount of new opportunities!</p>
        <button type='submit' className='signup-btn'>
          Sign up
        </button>
       



      </div>

      </div>
  
  </>
}

export default Form