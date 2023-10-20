import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DataViz from '../Data-vitualization/DataViz';
import SlideExcercise from '../../Components/ListExcercise';

const Record = [
  {
    type: 'Yoga',
    
    totalDuration: 24,
  }, 
  {
    type: 'Running',
    totalDuration: 38,
  },
  {
    type: 'Swimming',
    totalDuration: 14,
  },
  {
    type: 'Cycling',
    totalDuration: 17,
  },
  {
    type: 'Gym',
    totalDuration: 42,
  },
]

const Home = () => {
  const exercises = ['Yoga', 'Running', 'Swimming', 'Cycling', 'Walking', 'Gym', 'Dancing'];
  const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const information = [4, 3, 1, 6, 4, 9, 7];

  

  return (
    <main className='w-full h-full flex flex-col gap-4'>
      <section className="w-full flex items-center justify-center h-2/6 bg-gradient-to-r from-amber-400 to-[#FFBF00] rounded-2xl p-4">
        <article className="w-full md:w-3/4 h-full flex justify-between items-center px-3 xl:px-5">
          <div>
            {/* <FitnessCenterIcon sx={{ fontSize: 100 }} className="text-black mx-2" />
            <h1 className='xl:text-3xl text-black font-bold'>Excercise</h1>
            <p className='text-black text-xl my-2'>{`1`} hour {`50`} minutes</p> */}
            <SlideExcercise excercise={exercises} />
          </div>
          <div>
            <div className='flex flex-col gap-2 items-center justify-center w-40 h-40 md:w-44 md:h-44 rounded-full border-4 bg-black'>
              <p className='text-xl text-white'>Total Day</p>
              <h1 className='text-5xl font-bold text-white'>{`1`}</h1>
            </div>
          </div>
        </article>
      </section>
      <section className="w-full h-4/6 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-100 to-gray-300 rounded-2xl p-4">
        <article className="w-full h-full flex items-center justify-center">
          <DataViz day={day} information={information}/>
        </article>
      </section>
    </main>
  ) 
}

export default Home