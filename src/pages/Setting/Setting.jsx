const Setting = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full">
      {/* header */}
      <div>
        <h1 className="text-7xl font-bold mb-10 text-center m-10 text-inherit
        md:max-sm: text-xl ">Settings</h1>
        <h2 className="text-xl font-bold mb-10 text-center text-inherit">Set your account and enhance security, access help and support</h2>
      </div>

      {/* setting option */}
      <div>
        <div className="flex flex-wrap justify-center">

          {/* user accout */}
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-12 overflow-hidden sm:w-52">
          <img src="src/pages/Setting/iicon/user (2).png" alt="user-icon" class="m-6" />
          <a href="/settings/user-account" class="bg-blue-200 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">User Account</a>
        </div>
          {/* security setting */}
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-12 overflow-hidden sm:w-52">
          <img src="src/pages/Setting/iicon/security.png" alt="security-icon" class="m-6" />
          <a href="/settings/security-setting" class="bg-blue-200 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Security Setting</a>
        </div>
          {/* help support */}
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-12 overflow-hidden sm:w-52">
          <img src="src/pages/Setting/iicon/customer-service-agent.png" alt="support-icon" class="m-6" />
          <a href="/settings/help-support" class="bg-blue-200 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Help & Support</a>
        </div>
        </div>

          {/* log out */}
        <div className="flex flex-wrap justify-center">
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-12 overflow-hidden sm:w-52">
          <img src="src/pages/Setting/iicon/turn-off.png" alt="logout-icon" class="m-6" />
          <a href="/settings/log-out" class="bg-blue-200 text-white p-3 text-center hover:bg-red-500 transition-all duration-500">Log Out</a>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Setting;


