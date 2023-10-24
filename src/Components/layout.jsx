import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import '../main.jsx'

const Layout = () => {
  return (
    <main 
      className="w-screen h-screen flex xl:flex-row xl:items-center xl:p-4 bg-[#F3F5F7]
      md:flex-row md:items-center
      flex-col-reverse">
        <section className='flex w-full h-auto md:rounded-r-3xl xl:rounded-3xl md:w-20 xl:w-60 md:h-full xl:h-full px-5 md:px-1 bg-[#6A4C93] '>
            <Navbar />
        </section>
        <section className='w-full h-full p-4 flex flex-col bg-slate-200 md:rounded-3xl md:ms-4 drop-shadow-2xl'>
            <Outlet />
        </section>
    </main>
  )
}

export default Layout;