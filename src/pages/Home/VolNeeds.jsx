import React, { use } from 'react';
import VolunteerCard from '../Shared/VolunteerCard';
import { Link } from 'react-router';

const VolNeeds = ({volunterPromise}) => {
    
 
    const sortedJobs = use(volunterPromise)
  .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
  .slice(0, 6);

    return (
        <div className='bg-teal-500 '>
           
            <h1 className='font-extrabold text-4xl text-center pt-10'>Volunteer Needs Urgent</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:ml-16 py-16'>
                {
                    sortedJobs.map(job => <VolunteerCard key={job._id}job={job}></VolunteerCard>)
                }
            </div>
            <div className="text-center py-8 ">
          <Link to="/allNeeds" >
          <button className="btn w-40 btn-secondary" >
                        See All 
                    </button></Link>
                </div>
            
        </div>
    );
};

export default VolNeeds;