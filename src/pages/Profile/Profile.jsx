import React from 'react';
import './Profile.css'
import Card from './card';
import pfp from './200px.jpg';

const mockProfile = [
  {
    info_id: 0,
    profile_id: 1,
    full_name: "Potato putute",
    weight: 56,
    height: 178,
    date_of_birth: 230409,
  }
]

const mockInfo = [
  {
    id:0,
    activity_id:"Yoga",
    start_date:"05/15/2023",
    duration:"45 mins",
    distance:"0 KM.",
    location:"Samui",
    note:"i got hit by falling orange while wait for bus"
  },
  {
    id: 1,
    activity_id: "Yoga",
    start_date: "06/03/2023",
    duration: "55 mins",
    distance: "0.5 KM",
    location: "Paris",
    note: "Peaceful session by the Eiffel Tower."
  },  
  {
    id: 2,
    activity_id: "Running",
    start_date: "07/22/2023",
    duration: "30 mins",
    distance: "3.5 KM",
    location: "New York",
    note: "Sunny day for a quick jog."
  },   
  {
    id: 3,
    activity_id: "Swimming",
    start_date: "08/15/2023",
    duration: "1 hour",
    distance: "N/A",
    location: "Los Angeles",
    note: "Relaxed in the pool all afternoon."
  },   
  {
    id: 4,
    activity_id: "Cycling",
    start_date: "04/18/2023",
    duration: "45 mins",
    distance: "12 KM",
    location: "Tokyo",
    note: "Explored the city streets on a bike."
  },
  {
    id: 5,
    activity_id: "Hiking",
    start_date: "09/10/2023",
    duration: "2 hours",
    distance: "6 KM",
    location: "London",
    note: "Hiked through beautiful trails."
  }, 
  {
    id: 6,
    activity_id: "Dancing",
    start_date: "05/27/2023",
    duration: "1.5 hours",
    distance: "N/A",
    location: "Samui",
    note: "Grooved to some great tunes."
  } ,
  {
    id: 7,
    activity_id: "Running",
    start_date: "07/05/2023",
    duration: "40 mins",
    distance: "4.5 KM",
    location: "Paris",
    note: "Enjoyed a scenic run along the Seine."
  },
  {
    id: 8,
    activity_id: "Yoga",
    start_date: "06/12/2023",
    duration: "60 mins",
    distance: "0 KM",
    location: "Los Angeles",
    note: "Meditated on the beach."
  },
  {
    id: 9,
    activity_id: "Swimming",
    start_date: "08/28/2023",
    duration: "45 mins",
    distance: "1 KM",
    location: "New York",
    note: "Swam in the city pool."
  },
  {
    id: 10,
    activity_id: "Cycling",
    start_date: "04/06/2023",
    duration: "75 mins",
    distance: "18 KM",
    location: "Tokyo",
    note: "Biked through busy streets."
  },
  {
    id: 11,
    activity_id: "Hiking",
    start_date: "09/19/2023",
    duration: "2.5 hours",
    distance: "8 KM",
    location: "London",
    note: "Explored scenic trails in the countryside."
  },
]

const Profile = () => {
  return (
    <div>
      <div className='flex px-6 py-3 bg-stone-700 rounded-3xl'>
        <div className='profile-image'><img src={pfp} alt="holder image" className='rounded-3xl' /></div>
        <div className='profile-name ml-6'>
          <p className="text-base text-neutral-600 dark:text-neutral-200">Name : {mockProfile[0].full_name}</p>
          <p className="text-base text-neutral-600 dark:text-neutral-200">Weight : {mockProfile[0].weight}</p>
          <p className="text-base text-neutral-600 dark:text-neutral-200">Height : {mockProfile[0].height}</p>
          <p className="text-base text-neutral-600 dark:text-neutral-200">Birthday: {mockProfile[0].date_of_birth}</p> 
        </div> 
      </div>
      <div className='' >
        <div className='grid md:grid-cols-3 grid-cols-1 '>
          {mockInfo.splice(0,9).map((item) => (
            <Card key={item.id}
              activity_id={item.activity_id}
              start_date={item.start_date}
              duration={item.duration}
              location={item.location}
              note={item.note}
            ></Card>
          ))}
        </div>
      </div>         
    </div>
  )
}

export default Profile