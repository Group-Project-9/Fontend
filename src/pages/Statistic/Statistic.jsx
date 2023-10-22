import { useState, useEffect } from 'react';
// import axios from 'axios';
import ActivityCard from './ActivityCard';
// import ActivityType from './ActivityType';
import mockInfo from './mockdata';

const Statistic = () => {

  // const [getData, setGetData] = useState(mockInfo);
  // const [userSelect, setUserSelect] = useState(mockInfo);
  


  return (
    <main className="w-full h-full flex flex-col gap-3">
      <section className="w-full h-2/6 rounded-2xl p-4 bg-transparent">
        <article className='flex '>
          {/* <ActivityType  /> */}
        </article>
      </section>
      <section className="w-full h-4/6 rounded-2xl p-4 bg-gradient-to-r from-cyan-200 to-cyan-400">
        <article>
          {/* <ActivityCard allActivity={} /> */}
        </article>
      </section>
    </main>    
  )
}

export default Statistic