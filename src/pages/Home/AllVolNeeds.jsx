import React from 'react';
import VolunteerCard from '../Shared/VolunteerCard';
import { useLoaderData } from 'react-router';

const AllVolNeeds = () => {
    const volunteerNeeds = useLoaderData();
    console.log(volunteerNeeds)
    return (
         <div className='bg-green-300 max-h-full pl-16 py-20  '>
            <h1 className='text-xl lg:text-4xl font-bold mb-6 text-center'>Volunteer need posts page</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                {
                    
                    volunteerNeeds.map(volunteer => <VolunteerCard key={volunteer._id} job={volunteer}></VolunteerCard>)
                }
            </div>
        </div>
    );
};

export default AllVolNeeds;