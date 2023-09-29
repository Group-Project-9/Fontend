import React, { useState } from "react";
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username" || name === "password" || name === "email") {
      const updatedValue = value.replace(/\s/g, "");
      setFormData({ ...formData, [name]: updatedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const handleChanges = (e) => {
    const { name, value } = e.target;
    if (name === "username" || name === "password") {
      const updatedValue = value.replace(/\s/g,"")
      setFormData({...formData, [name]: updatedValue })
    } else {
        setFormData({...formData, [name]: value})
    }
  }

  return (
    <div className="flex">
      <div className="min-h-screen w-screen flex items-center justify-center border-2">
        <div className="bg-white p-8 "></div>
      </div>
      <div className="min-h-screen  flex items-center justify-center border-2">
        <div className=" p-8 rounded w-96">
          <h2 className="text-4xl mb-4 justify-center">
            Create Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[13pt] mb-3 text-center bg-transparent text-neutral-200">
                Please enter your Username <br />
                password and Email!
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="USERNAME"
                className="w-full bg-gray-700 border text-center rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className="w-full bg-gray-700 border text-center rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="PASSWORD"
                className="w-full bg-gray-700 border text-center rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4 flex h-full justify-center ">
              <label className=" bg-transparent text-[10pt] border text-center text-sm px-3 opacity-50 py-2 mt-1 focus:border-blue-500">Upload Picture</label>
              <label htmlFor="img" className=" bg-transparent text-[10pt] visible text-center text-sm px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 hover:underline">Choose file</label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                placeholder="upload picture"
                className="w-[50%] hidden"
              />
            </div>
            <button
              type="submit"
              className="w-[50%] bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
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


export default Register;
