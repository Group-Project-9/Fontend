import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (

<>
  <div>
    <form>
      s<h1>LOGIN</h1>
      <span>Please enter your login and password!</span>
      <input type="username" placeholder="username" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
      <span>Don’t have an account? <a href="#">Sign up</a></span>
      </form>
    </div>

  <div>
    <h1>Welcome Back!</h1>
    <p>To keep connected with us please login with your personal info</p>
    <button>Sign In</button>
  </div>

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
          <Link to = "../settings">
            <li>Link to Setting</li>
          </Link>
          <Link to = "../form">
            <li>Link to Form</li>
          </Link>  
        </ul>
      </div>
    </>

  )
}

export default Login
