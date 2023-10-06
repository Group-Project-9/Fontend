import React from 'react';
import './Profile.css'
import Card from './card';
import pfp from './200px.jpg';
import { mockProfile, mockInfo } from './mockdata';

/* 
//profile
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = userDatabase[userId];

  if (!name) {
    res.status(404).json({
      error: {
        message: "User not found",
      },
    });
    return;
  }

  res.json({
    data: {
      id: userId,
      name,
      petImageUrl: getPetImageUrl(userId),
    },
  });
}); */

/* 
//user activity
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = userDatabase[userId];

  if (!name) {
    res.status(404).json({
      error: {
        message: "User not found",
      },
    });
    return;
  }

  res.json({
    data: {
      id: userId,
      name,
      petImageUrl: getPetImageUrl(userId),
    },
  });
}); */



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
        <div className='activity-header mt-4 ml-1 mr-4'>
          <h2 className='text-lg text-neutral-600 dark:text-neutral-200 bg-stone-700 rounded-3xl pl-4'>Recent Activity</h2>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 '>
          {mockInfo.map((item) => (
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