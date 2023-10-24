import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoDT from '../../assets/icon-dt.png';
import LogoMB from '../../assets/icon-mb.png';
// import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../../App/User/userSlice';
import GoogleAuth from "../../Components/GoogleAuth";

const Login = () => {

  const [logo, setLogo] = useState(LogoDT);
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    dispatch(loginRequest());

    try {
      const request = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await request.json();
      if (data.success === false) {
        dispatch(loginFailure(data.message));
        return;
      }
      
      dispatch(loginSuccess(data));
      navigate('/');

    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  }
  
  return (
  <div id='login-main' 
    className='h-[100vh] flex flex-col lg:flex-row items-center justify-center sm:justify-around xl:justify-center p-5 bg-black'
  >
    <div   
      className='w-full md:w-4/5 lg:w-2/4 xl:h-full flex text-center justify-center sm:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-blue-500 to-90% rounded-xl mb-5 sm:mb-0 md:mb-5'
    >
      <img src={logo} alt="logo-webpage" className='w-full '/>
    </div>
    <div 
      className='w-full lg:w-[50%] flex flex-col items-center justify-start'
    >
      <h1 className='text-6xl font-bold my-10 hidden xl:block'>Welcome back!</h1>
      <form 
        onSubmit={handleSubmit}
        className='w-full flex flex-col items-center justify-center rounded-md shadow-lg'
      >
        <div className='w-[80%] md:w-4/5 xl:w-3/5 flex flex-col'>
          <h1 className='text-3xl font-bold mb-4 uppercase'>Sign In</h1>
          <p className='text-md font-medium mb-4 text-white  hidden md:block'>Please enter your email & password</p>
        </div>
        <input 
          className='w-[80%] md:w-4/5 xl:w-3/5 border border-gray-400 rounded-md mb-4 p-2 text-md font-medium ps-4' 
          type="email"
          placeholder='Email'
          id="email" 
          onChange={handleChange}
        />
        <input 
          className='w-[80%] md:w-4/5 xl:w-3/5 border border-gray-400 rounded-md mb-4 p-2 text-md font-medium ps-4' 
          type="password" 
          placeholder='Password' 
          id="password"
          onChange={handleChange}
        />
        <div className='w-[80%] md:w-4/5 xl:w-3/5 flex flex-col 2xl:flex-row justify-between items-start 2xl:items-center mb-4'>
          <label htmlFor="keep-login" className='bg-transparent text-md font-medium text-white '>
            <input type="checkbox" name="keep-login" id="keep-login" className='me-2 mb-3 2xl:mb-0 '/>
            Keep me logged in
          </label>
          <p className='text-md font-medium text-white'>Dont have an account? 
            <Link to="/register" className='ms-1 font-bold text-blue-400'>
              Sign Up
            </Link>
          </p>
        </div>
        <button 
          disabled={loading}
          className='w-[80%] md:w-4/5 xl:w-3/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-4 my-3 rounded-xl'>
            
          {loading ? "Loading..." : "Sign In"}
        </button>
        <GoogleAuth />
      </form>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
      {/* <div className='w-[80%] md:w-4/5 xl:w-3/5 mt-5 flex justify-center items-center  hidden md:flex'>
        <div className='h-[2px] w-[20%] md:w-[10vw] xl:w-[8.5vw] 2xl:w-[9.5vw] bg-white'></div>
        <p className='text-sm xl:text-md font-medium xl:font-bold mx-4'>Or countinue with</p>
        <div className='h-[2px] w-[20%] md:w-[10vw] xl:w-[8.5vw] 2xl:w-[9.5vw] bg-white'></div>
      </div>
      <div className='h-auto mt-5 py-3 px-4 border-2 border-white rounded-xl hover:bg-sky-500 cursor-pointer'>
        <GoogleIcon />
      </div> */}
    </div>
</div>
  )
}


export default Login
