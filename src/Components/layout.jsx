import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import '../main'

const Layout = () => {
  return (
    <main className="w-[100vw] h-[100vh] flex items-center p-4">
        <section className='flex h-full'>
            <Navbar />
        </section>
        <section className='w-[90vw] h-[100vh] p-4 flex flex-col justify-between'>
            <Outlet />
        </section>
    </main>
  )
}

export default Layout;