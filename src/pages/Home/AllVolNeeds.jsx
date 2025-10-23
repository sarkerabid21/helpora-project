import React, { useEffect, useState } from 'react';

import VolunteerCard from '../Shared/VolunteerCard';
import VolunteerTable from '../Shared/VolunteerTable';
import { useOutletContext } from 'react-router';

const AllVolNeeds = () => {
  const { isTableLayout } = useOutletContext(); 

  const [volunteerNeeds, setVolunteerNeeds] = useState([]);
  const [searchText, setSearchText] = useState('');

  // useEffect(() => {
  //   fetch(`https://volunteer-servers.vercel.app/volunteer?search=${searchText}`)
  //     .then(res => res.json())
  //     .then(data => setVolunteerNeeds(data));
  // }, [searchText]);
useEffect(() => {
  fetch(`https://volunteer-server-blush.vercel.app/volunteer?search=${searchText}`)
    .then(res => res.json())
    .then(data => {
      // deadline অনুযায়ী ascending order
      const sortedData = data.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
      setVolunteerNeeds(sortedData);
    });
}, [searchText]);

  return (
    <div 
    className="px-4 bg-green-100 dark:bg-teal-600  lg:px-16 py-20 bg-cover  bg-center bg-fixed"
     >
      <h1 className='text-xl dark:text-green-200 lg:text-4xl font-bold my-6 text-center'>Volunteer need posts page</h1>

      <div className='flex justify-center mb-8'>
        <input
          type="text"
          placeholder="Search by post title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full max-w-md rounded-4xl"
        />
      </div>

      {isTableLayout ? (
        <VolunteerTable data={volunteerNeeds} />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
          {volunteerNeeds.map(volunteer => (
            <VolunteerCard key={volunteer._id} job={volunteer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVolNeeds;
