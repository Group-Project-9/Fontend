

const Security_setting = () => {
  return (
    <main className='w-full h-full flex items-center justify-center'>
      <section className='w-4/5 h-4/5 flex flex-col  items-center justify-center bg-[#705747] rounded-2xl'>
        <article className="w-4/5 h-[10%]">
          <h1 className="text-center text-2xl xl:text-4xl text-stone-200 font-bold">Change Password</h1>
        </article>
        <article className="w-4/5 h-[70%] border-4 rounded-xl">
          <form className="">
            <div className="w-1/2 flex flex-col">
              <label htmlFor="oldpass">Previous Password</label>
              <input type="password" id="oldpass" placeholder="Previous Password . . ." />
            </div>
            <div>
              <label htmlFor="newpass">New Password</label>
              <input type="password" id="newpass" placeholder="New Password . . ." />
            </div>
            <div>
              <label htmlFor="newpass">Comfirm New Password</label>
              <input type="password" id="newpass-con" placeholder="Comfirm New Password . . ." />
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Security_setting