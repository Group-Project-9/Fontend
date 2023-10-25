// import { useState } from 'react';
import { useSelector } from 'react-redux';


const UserAccountSettings = () => {

  const { currentUser } = useSelector((state) => state.user); 


  return (
    <main className="w-full h-full flex flex-col items-center justify-center p-3">
        <section className="w-full h-full flex flex-col items-center justify-center gap-10 p-3">
          <article className="w-full h-2/6 flex items-center justify-center bg-white rounded-2xl">
            <h1 className="text-3xl font-bold text-black">Edit Profile</h1>
          </article>
          <article className="w-4/5 h-5/6 bg-[#A4826E] px-2 py-5 rounded-2xl">
            <form 
              className="w-full h-full flex flex-col w-full text-black gap-6"
            >
              <img src={currentUser.avatar} alt="Profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2" />
              <div className="w-full flex gap-3">
                <input 
                  type="text" 
                  placeholder="First name ..." 
                  className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white" 
                  id="firstname" 
                  required
                  />
                <input 
                  type="text" 
                  placeholder="Last name ..." 
                  className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white" 
                  id="lastname" 
                  required
                  />
              </div>
              <div className="w-full flex gap-3">
              <input 
                  type="email" 
                  placeholder="E-mail ..." 
                  className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white" 
                  id="email" 
                  required
                  />
              <select
                  className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white"
                  id="gender"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
              </select>
              </div>
              <div className="w-full flex gap-3">
                <input
                  type="number"
                  placeholder="Weight ..."
                  className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white"
                  id="weight"
                  required
                />
                <input
                  type="number"
                  placeholder="Height ..."
                  className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white"
                  id="height"
                  required
                />
              </div>
              <div className="w-full flex gap-3">
                <input
                  type="password"
                  placeholder="Password ..."
                  className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white"
                  id="password"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm password ..."
                  className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white"
                  id="confirmPassword"
                  required
                />
              </div>
              <button 
                className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>
                Update
              </button>
            </form>
           
          </article>
        </section>
        <section className='w-full h-auto flex justify-around items-center gap-10 mt-5 text-lg'>
              <span className='text-white cursor-pointer py-3 px-5 bg-red-500 rounded-xl'>Delete Account</span>
              <span className='text-white cursor-pointer py-3 px-5 bg-blue-700 rounded-xl'>Sign Out</span>
        </section>
    </main>
  );
};

export default UserAccountSettings;