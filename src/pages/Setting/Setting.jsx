const Setting = () => {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full ">
      {/* header */}
      
      <div className='flex w-full h-20 justify-center items-center px-10 border bg-white rounded-lg shadow-sm'>
                <h1 className='text-2xl xl:text-5xl text-inherit'>Settings</h1>
      </div>
        {/* <h1 className="lg:text-4xl max-lg:text-4xl xl:text-6xl font-bold mb-10 text-center m-10 text-inherit">Settings</h1> */}
        {/* <h2 className="lg:text-xl max-lg:text-base font-bold mb-10 text-center text-inherit">Set your account and enhance security, access help and support</h2> */}
      

      {/* setting option */}
      <div>
        <div className="flex flex-wrap justify-center m-5">

          {/* user accout */}
          <div class="flex flex-col bg-white rounded-lg shadow-md w-52 m-3 overflow-hidden lg:w-36 lg:m-1 xl:w-56 xl:m-4 ">
  <img src="src/pages/Setting/iicon/user (2).png" alt="user-icon" class="p-6 max-lg:hidden" />
  <a href="/settings/user-account" class="bg-blue-200 text-white p-3 text-sm xl:text-xl text-center hover:bg-blue-800 transition-all duration-500">User Account</a>
</div>

          {/* security setting */}
          <div class="flex flex-col bg-white rounded-lg shadow-md w-52 m-3 overflow-hidden lg:w-36 lg:m-1 xl:w-56 xl:m-4">
  <img src="src/pages/Setting/iicon/security.png" alt="security-icon" class="p-6 max-lg:hidden" />
  <a href="/settings/security-setting" class="bg-blue-200 text-white p-3 text-sm xl:text-xl text-center hover:bg-blue-800 transition-all duration-500">Security Setting</a>
</div>

          {/* help support */}
          <div class="flex flex-col bg-white rounded-lg shadow-md w-52 m-3 overflow-hidden lg:w-36 lg:m-1 xl:w-56 xl:m-4">
  <img src="src/pages/Setting/iicon/customer-service-agent.png" alt="support-icon" class="p-6 max-lg:hidden" />
  <a href="/settings/help-support" class="bg-blue-200 text-white p-3 text-sm xl:text-xl text-center hover:bg-blue-800 transition-all duration-500">Help & Support</a>
</div>

        </div>

          {/* log out */}
        <div className="flex flex-wrap justify-center">
        <div class="flex flex-col bg-white rounded-lg shadow-md w-52 m-3 overflow-hidden lg:w-36 lg:m-1 xl:w-56 xl:m-4">
  <img src="src/pages/Setting/iicon/turn-off.png" alt="logout-icon" class="p-6 max-lg:hidden" />
  <a href="/settings/log-out" class="bg-blue-200 text-white p-3 text-sm xl:text-xl text-center hover:bg-red-500 transition-all duration-500">Log Out</a>
</div>

        </div>

      </div>
    </div>
  );
};

export default Setting;


