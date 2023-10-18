const Setting = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold mb-10 text-center m-10">Settings</h1>
      <div className="flex justify-center">
        <div className="flex-col items-center">
          {/* button for setting */}
          
        <div>
          <div>
            <a href="/settings/user-account">
                <button className="box-border btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-2 w-80
            bg-gradient-to-r from-green-400 to-blue-500 hover:from-magenta-500 hover:to-amber-500" type="submit">
              <img className="object-contain hover:object-scale-down h-7 mx-2" src="src/pages/Setting/icon/user (1).png" alt="user-icon"></img >
              User Account
                </button>
            </a>
        </div>

        <div >
          <a href="/settings/security-setting">
            <button className="box-border btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-2 w-80
            bg-gradient-to-r from-green-400 to-blue-500 hover:from-magenta-500 hover:to-amber-500" type="submit">
            <img className="object-contain hover:object-scale-down h-7 mx-2" src="src/pages/Setting/icon/verified.png" alt="security-icon"></img >
              Security Setting
            </button>
          </a>
        </div>

        {/* <div>
          <a href="/settings/theme-change">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 w-60">
              Theme Change
            </button>
          </a>
        </div> */}

        <div >
          <a href="/settings/help-support">
            <button className="box-border btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-2 w-80
            bg-gradient-to-r from-green-400 to-blue-500 hover:from-magenta-500 hover:to-amber-500" type="submit">
            <img className="object-contain hover:object-scale-down h-7 mx-2" src="src/pages/Setting/icon/headphones.png" alt="headphone-icon"></img >
              Help & Support
            </button>
          </a>
        </div>

        <div>
          <a href="/settings/log-out">
            <button className="box-border btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-10 w-80
            bg-gradient-to-r from-green-400 to-blue-500 hover:from-magenta-500 hover:to-amber-500" type="submit">
            <img className="object-contain hover:object-scale-down h-7 mx-2" src="src/pages/Setting/icon/power-off.png" alt="turnOff-icon"></img >
              Log Out
            </button>
          </a>
        </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Setting;


