import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import '../main.jsx';

const Layout = () => {
  return (
    <main  
      className="w-screen h-screen flex xl:flex-row xl:items-center xl:p-4 bg-white
      md:flex-row md:items-center
      flex-col-reverse">
        <section 
          style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}
          className='flex w-full h-auto md:w-20 xl:w-60 md:h-full xl:h-full md:rounded-r-3xl xl:rounded-3xl bg-neutral-500'>
            <Navbar />
        </section>
        <section 
          style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}
          className='w-full h-full p-4 flex flex-col bg-[#F0EBE3] md:rounded-l-3xl md:rounded-none md:rounded-3xl md:ms-4'>
            <Outlet />
        </section>
    </main>
  );
};

export default Layout;
