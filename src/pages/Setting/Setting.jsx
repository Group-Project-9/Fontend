const Setting = () => {
  return (
    // CONTAINER SETTING
    <div class="flex flex-col justify-center items-center h-screen mx-auto ">
      {/*FLEX BOX-1, H1 SETTING */}
      <div>
        <h1 className="text-5xl mb-10 text-center">SETTING</h1>
      </div>
      {/*FLEX BOX-2, all setting button */}
      <div>
        {/*button USER ACCOUNT*/}
        <div>
          <a href="/settings/user-account">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 w-60">
              USER ACCOUNT
            </button>
          </a>
        </div>
        {/*button SECURITY SETTING*/}
        <div>
          <a href="/settings/security-setting">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 w-60">
              SECURITY SETTING
            </button>
          </a>
        </div>
        {/*button THEME CHANGE*/}
        {/* <div>
          <a href="/settings/theme-change">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 w-60">
              THEME CHANGE
            </button>
          </a>
        </div> */}

        {/*button HELP & SUPPORT*/}
        <div>
          <a href="/settings/help-support">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 w-60">
              HELP & SUPPORT
            </button>
          </a>
        </div>

        {/*button LOG OUT*/}
        <div className="mt-10">
          {/* The button to open modal */}
          <a
            href="#btn_logout"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60"
          >
            LOG OUT
          </a>
          {/* Put this part before </body> tag */}
          <div className="modal" id="btn_logout">
            <div className="modal-box">
              {/* <h3 className="font-bold text-lg">Hello!</h3> */}
              <p className="py-4">ARE YOU SURE YOU WANT TO LOG OUT ?</p>
              <div className="modal-action">
                <div>
                  <a
                    href="/settings"
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  >
                    CLOSE
                  </a>
                </div>
                <div>
                  <a
                    href="/settings/log-out"
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  >
                    LOG OUT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;