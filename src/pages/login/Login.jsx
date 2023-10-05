/* eslint-disable no-unused-vars */
import './Login.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoDT from '../../assets/icon-dt.png';
import LogoMB from '../../assets/icon-mb.png';

const Login = () => {

  const [action,setAction] = useState("Login");

  // const [logo, setLogo] = useState(LogoDT);

//   const handleLogoChange = () => {
//     const windowWidth = window.innerWidth;
//     if (windowWidth <= 1279) {
//         setLogo(LogoMB);
//     } else {
//         setLogo(LogoDT);
//     }
// };

// useEffect(() => {
//     handleLogoChange(); 
//     window.addEventListener("resize", handleLogoChange);
//     return () => {
//         window.removeEventListener("resize", handleLogoChange);
//     };
// }, []);
  
  return (
  <div id='login-main' 
  // className='flex items-center justify-center' 
  >
   
   {/* div logo */}
  {/* <div 
    className='w-[50%] flex text-center justify-center'>
      <img src={logo} alt="logo-webpage" />
  </div> */}

    {/* div for sing up */}
    <div>
      <div className='container'>

        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
          <div className='small-text'>Please enter your username and password!</div>
        </div>

        <div className='inputs'>

          <div className='input'>
            <img src='' alt=''/>
            <input type='text' placeholder='Username'/>
          </div>

          <div className='input'>
            <img src='' alt=''/>
            <input type='email' placeholder='Email'/>
          </div>

          <div className='input'>
            <img src='{}' alt=''/>
            <input type='Password' placeholder='Password'/>
          </div>

      <div className='forgot-password'><span>Forgot your password?</span></div>

      <div className='submit-container'>
        <div className='submit'><button>Login</button></div>
      </div>


        </div>
    </div>



        {/* <div className='w-[50%]'>
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
          <span>Don’t have an account? <a href="#">Sign up</a></span>
        </div> */}

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
    

    </div>
  )
}


export default Login
