// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Register.css'

const Register = () => {
  return (
<>
  <div>
    <form>
      <h1>Create Account</h1>
      <span>Please enter your Username password and Email!</span>
      <input type="userName" placeholder="Username" />
      <input type="fullName" placeholder="Fullname" />
      <input type="password" placeholder="Password" />
      <input type="confirmPassword" placeholder="Confirm password" />
      <button>Sign Up</button>
      <span href="#">already have an account? Login</span>
    </form>
	</div>

  <div>
    <h1>Hello, Friend!</h1>
    <p>Enter your personal details and start journey with us</p>
    <button id="signUp">Sign Up</button>
  </div>
</>
  )
}

export default Register