import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
// import GoogleIcon from '@mui/icons-material/Google';
import GoogleAuth from "../../Components/GoogleAuth";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError]  = useState(null);
  const [matchPassword, setMatchPassword] = useState(true);
  const [selectGender, setSelectGender] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log(formData);
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      setMatchPassword(false)
      return;
    }
    if (!Object.prototype.hasOwnProperty.call(formData, 'gender')) {
      setSelectGender(false)
      return;
    }
    setMatchPassword(true)
    setSelectGender(true)
    console.log(formData);

    try {
      setLoading(true);
      const request = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await request.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      
      setLoading(false);
      setError(null);
      navigate('/login');

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-center bg-black md:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
      <div className="lg:w-2/5 hidden h-full lg:flex items-center justify-center">
        <div className="w-4/5 text-white">
          <h1 className="text-6xl float-right mb-3">Welcome to</h1>
          <h1 className="text-5xl font-bold float-right">Fitness Diary</h1>
        </div>
      </div>
      <div className="w-full lg:w-3/5 h-full flex flex-col items-center justify-center bg-pink-50 rounded-2xl drop-shadow-2xl">
        <div className="w-4/5 lg:w-3/5 text-black my-2">
          <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
          <p className="text-md">Create account to acess our services</p>
        </div>
        <div className="w-4/5 sm:w-3/5 my-2">
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col w-full text-black gap-3"
          >
            <div className="w-full flex gap-3">
              <input 
                type="text" 
                placeholder="First name ..." 
                className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white" 
                id="firstname" 
                required
                onChange={handleChange} />
              <input 
                type="text" 
                placeholder="Last name ..." 
                className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white" 
                id="lastname" 
                required
                onChange={handleChange} />
            </div>
            <div className="w-full flex gap-3">
              <input 
                  type="email" 
                  placeholder="E-mail ..." 
                  className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white" 
                  id="email" 
                  required
                  onChange={handleChange} />
              <select
                  className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white"
                  id="gender"
                  onChange={handleChange}
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
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Height ..."
                className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white"
                id="height"
                required
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex gap-3">
              <input
                type="password"
                placeholder="Password ..."
                className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white"
                id="password"
                required
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm password ..."
                className="w-1/2 border-2 border-gray-200 p-3 rounded-lg bg-white"
                id="confirmPassword"
                required
                onChange={handleChange}
              />
            </div>
            <button 
              disabled={loading}
              className="bg-slate-700 text-white p-3 mt-5 rounded-lg font-bold uppercase hover:opacity-95 disable:opacity-80">
              {loading ? "Loading..." : "Sign Up"}
            </button>
            <GoogleAuth />
          </form>
          {matchPassword === false && <p className='text-red-500 mt-5'>Password does not match</p>}
          {selectGender === false && <p className='text-red-500 mt-5'>Please select gender</p>}
          <div className='flex gap-2 mt-5'>
            <p className='text-md  text-black'>Have an account?</p>
            <Link to={'/login'}>
              <span className='text-md font-bold text-blue-700'>Sign In</span>
            </Link>
          </div>
          {/* <div className='w-[80%] md:w-full xl:w-full 2xl:w-full mt-5 flex justify-center items-center  hidden md:flex'>
              <div className='h-[2px] w-[20%] md:w-[10vw] xl:w-[8.5vw] 2xl:w-1/3 bg-white'></div>
              <p className='text-sm xl:text-md font-medium xl:font-bold mx-4'>Or countinue with</p>
              <div className='h-[2px] w-[20%] md:w-[10vw] xl:w-[8.5vw] 2xl:w-1/3 bg-white'></div>
          </div>
          <div className='h-auto mx-auto flex items-center w-16 mt-5 py-3 px-4 border-2 border-white rounded-xl bg-slate-500 hover:bg-sky-900 cursor-pointer'>
            <GoogleIcon/>
          </div> */}
       
          {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
