/* eslint-disable no-unused-vars */
import './Login.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoDT from '../../assets/icon-dt.png';
import LogoMB from '../../assets/icon-mb.png';

const Login = () => {

  const [logo, setLogo] = useState(LogoDT);

  const handleLogoChange = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1279) {
        setLogo(LogoMB);
    } else {
        setLogo(LogoDT);
    }
};

useEffect(() => {
    handleLogoChange(); 
    window.addEventListener("resize", handleLogoChange);
    return () => {
        window.removeEventListener("resize", handleLogoChange);
    };
}, []);
  
  return (
  <div 
    className='bg-white flex items-center justify-center'
    id='login-main'
  >
    <div className='w-[50%] flex text-center justify-center'>
      <img src={logo} alt="logo-webpage" />
    </div>
    <div className='w-[50%] flex flex-col items-center justify-center'>
      <div>
        <form className='flex flex-col container'>
          <div className='border-2 border-black p-5 flex flex-col'>
            <h1 className='text-black text-xl font-bold'>LOGIN</h1>
            <label htmlFor="username">
              <input type="username" id="username" value="" placeholder="Enter your email ... " />
            </label>
            <label htmlFor="">
              <input type="password" id="password" value="" placeholder="Enter your password ... " />
            </label>
          </div>
        </form>
      </div>
      <div className='w-[50%]'>
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
        <span>Don’t have an account? <a href="#">Sign up</a></span>
      </div>
    </div>
    
{/* 
      <div id='temporary-link'>
        <h4>temporary link for checking</h4>
        <ul>
          <Link to = "../">
            <li>Link to Home</li>
          </Link>
          <Link to = "../profile">
            <li>Link to Profile</li>
          </Link>
          <Link to = "../register">
            <li>Link to Register</li>
          </Link>
          <Link to = "../setting">
            <li>Link to Setting</li>
          </Link>
          <Link to = "../form">
            <li>Link to Form</li>
          </Link>  
        </ul>
      </div> */}
    </div>
  )
}

export default Login
