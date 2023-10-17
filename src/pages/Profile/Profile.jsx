import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from './card';
import pfp from './200px.jpg';
import { mockProfile, mockInfo } from './mockdata';

const Profile = () => {
  const { _id } = useState({});
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get(
        //backend url here
        ''
      )
      if (response.status === 200 && response.data) {
        setProfileData([...response.data]);
        console.log('profile connect success!')
      } else {
        console.log('fail to get profile. error' + response.status)
      }
    };
    getProfile();
  }, []);

  /* 
  useEffect(() => {
  const userId = 123; // should obtain the _Id from React Router ?
  // Make an API request to the server using Axios
  axios.get(`/api/users/${userId}`)
    .then((response) => {
      setProfileData(response.data.userProfile); // Update state with fetched data
    })
    .catch((error) => {
      console.error('Error fetching profile data:', error);
    });
}, []);
  */
  
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
          <h2 className='text-lg text-neutral-600 dark:text-neutral-200 bg-stone-700 rounded-3xl py-5 px-7'>Recent Activity</h2>
        </div>
        <div className='flex flex-row flex-wrap'>
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