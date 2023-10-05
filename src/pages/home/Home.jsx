import './Home.css';
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
/*     <main className='w-[80vw] h-[100vh] flex items-center p-4' >
       <section className='flex h-full'>
        <Navbar />
      </section>
      <section className='h-full w-[100%] ps-4 flex flex-col justify-between'>
        <article className='h-[20%] w-[100%] bg-black mb-2 rounded-3xl'>
          
        </article>
        <article className='h-[80%] w-[100%] bg-black mt-2 rounded-3xl'></article>
      </section>
      
    </main> */
    <div id='temporary-link'>
        <h4>temporary link for checking</h4>
        <ul>
          <Link to = "../">
            <li>Link to Home</li>
          </Link>
          <Link to = "../profile">
            <li>Link to Profile</li>
          </Link>
          <Link to = "../register">
            <li>Link to Register</li>
          </Link>
          <Link to = "../settings">
            <li>Link to Setting</li>
          </Link>
          <Link to = "../form">
            <li>Link to Form</li>
          </Link>  
        </ul>
      </div>
  ) 
}

export default Home