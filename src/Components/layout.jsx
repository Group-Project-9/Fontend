import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import '../main'

const Layout = () => {
  return (
    <main 
      className="w-screen h-screen flex xl:flex-row xl:items-center xl:p-4 bg-[#F3F5F7]
      md:flex-row md:items-center
      flex-col-reverse">
        <section className='flex w-full h-auto md:rounded-r-3xl xl:rounded-3xl md:w-20 xl:w-60 md:h-full xl:h-full px-5 md:px-1 bg-gradient-to-l from-[#000080] to-blue-800 '>
            <Navbar />
        </section>
        <section className='w-full h-full p-4 flex flex-col bg-white md:rounded-3xl md:ms-4'>
            <Outlet />
        </section>
    </main>
  )
}

export default Layout;