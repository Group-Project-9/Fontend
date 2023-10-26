import { Link } from 'react-router-dom';

const Security_setting = () => {
  return (
    <main className='w-full h-full flex items-center justify-center'>
      <section className='w-4/5 h-4/5 flex flex-col  items-center justify-center bg-[#705747] rounded-2xl'>
        <article className="w-4/5 h-[10%]">
          <h1 className="text-center text-2xl xl:text-4xl text-stone-200 font-bold">Change Password</h1>
        </article>
        <article className="w-4/5 h-[70%] border-4 rounded-xl">
          <form className="w-full h-full flex flex-col items-center justify-center text-white gap-4">
            <div className="w-4/5 md:w-1/2 flex flex-col">
              <label 
                htmlFor="oldpass"
                className="font-bold">Previous Password:</label>
              <input 
                type="password" 
                id="oldpass" 
                className="w-full h-12 p-2 rounded-xl text-black bg-white" 
                placeholder="Previous Password . . ." 
              />
            </div>
            <div className="w-4/5 md:w-1/2 flex flex-col">
              <label htmlFor="newpass" className="font-bold">New Password:</label>
              <input 
                type="password" 
                id="newpass" 
                placeholder="New Password . . ." 
                className="w-full h-12 p-2 rounded-xl text-black bg-white"/>
            </div>
            <div className="w-4/5 md:w-1/2 flex flex-col">
              <label htmlFor="newpass-con" className="font-bold">Comfirm New Password:</label>
              <input 
                type="password" 
                id="newpass-con" 
                placeholder="Comfirm New Password . . ." 
                className="w-full h-12 p-2 rounded-xl text-black bg-white"/>
            </div>
            <Link type="submit"
              to="/settings"
            className="w-1/2 h-12 p-2 rounded-xl text-black bg-gray-800 hover:bg-stone-500 text-white font-bold mt-3 text-center pt-3" >Submit</Link>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Security_setting