import { signOutUserStart, signOutUserSuccess, signOutUserFailure } from "../../App/User/userSlice.js";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userAccout from "../../Assets/UserAcount.png";
import Protech from "../../Assets/Protech.png";
import Operator from "../../Assets/Operator.png";
import Logout from "../../Assets/Logout.png";


const Setting = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSignOut = async () => {

    try {
      dispatch(signOutUserStart());
      const res = await fetch('https://backend-project-final.onrender.com/api/auth/signout/');
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
      navigate('/login');

    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }
  };

  return (
    <div className="bg-[#705747] rounded-2xl w-full h-full flex flex-col">
      {/* header */}
      
      <div className='flex w-full h-20 justify-center items-center px-10  bg-gray-500 rounded-2xl text-white'>
                <h1 className='text-2xl xl:text-5xl text-inherit'>Settings</h1>
      </div>
        {/* <h1 className="lg:text-4xl max-lg:text-4xl xl:text-6xl font-bold mb-10 text-center m-10 text-inherit">Settings</h1> */}
        {/* <h2 className="lg:text-xl max-lg:text-base font-bold mb-10 text-center text-inherit">Set your account and enhance security, access help and support</h2> */}
      

      {/* setting option */}
      <div>
        <div className="flex flex-wrap justify-center m-5">

          {/* user accout */}
          <div className="flex flex-col bg-white rounded-lg shadow-md w-52 m-3 overflow-hidden lg:w-36 lg:m-1 xl:w-56 xl:m-4 ">
  <img src={userAccout} alt="user-icon" className="p-6 max-lg:hidden" />
  <a href="/settings/user-account" className="bg-stone-400 text-white p-3 text-sm xl:text-xl text-center hover:bg-stone-800 transition-all duration-500">User Account</a>
</div>

          {/* security setting */}
          <div className="flex flex-col bg-white rounded-lg shadow-md w-52 m-3 overflow-hidden lg:w-36 lg:m-1 xl:w-56 xl:m-4">
  <img src={Protech} alt="security-icon" className="p-6 max-lg:hidden" />
  <a href="/settings/security-setting" className="bg-stone-400 text-white p-3 text-sm xl:text-xl text-center hover:bg-stone-800 transition-all duration-500">Security Setting</a>
</div>

          {/* help support */}
          <div className="flex flex-col bg-white rounded-lg shadow-md w-52 m-3 overflow-hidden lg:w-36 lg:m-1 xl:w-56 xl:m-4">
  <img src={Operator} alt="support-icon" className="p-6 max-lg:hidden" />
  <a href="/settings/help-support" className="bg-stone-400 text-white p-3 text-sm xl:text-xl text-center hover:bg-stone-800 transition-all duration-500">Help & Support</a>
</div>

        </div>

          {/* log out */}
        <div className="flex flex-wrap justify-center">
        <div className="flex flex-col bg-white rounded-lg shadow-md w-52 m-3 overflow-hidden lg:w-36 lg:m-1 xl:w-56 xl:m-4">
  <img src={Logout} alt="logout-icon" className="p-6 max-lg:hidden" />
  <button 
    onClick={handleSignOut}
    className="bg-stone-400 text-white p-3 text-sm xl:text-xl text-center hover:bg-red-500 transition-all duration-500"
    >Log Out
  </button>
</div>

        </div>

      </div>
    </div>
  );
};

export default Setting;


