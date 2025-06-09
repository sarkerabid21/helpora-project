import React, { use, useState } from 'react';

// import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router';
// import { div } from 'motion/react-client';
// import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const VolunteerDetails = () => {
  const {
    title, thumbnail, category, deadline, location,
    volunteersNeeded, description, organizerName, organizerEmail, _id
  } = useLoaderData();

 


  return (
   <div className="  bg-teal-600 px-86 py-20">
    <h1 className='text-5xl font-extrabold text-center mb-6'>Volunteer Work Details </h1>
     <div className="  bg-teal-900 p-6">
      <img src={thumbnail} alt={title} className="w-full rounded-lg mb-4" />
      <h2 className="text-3xl font-bold">{title}</h2>
      <h2 className="mt-2">{description}</h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Deadline:</strong> {deadline}</p>
        <p><strong>Volunteers Needed:</strong> {volunteersNeeded}</p>
        <p><strong>Organizer:</strong> {organizerName}</p>
        <p><strong>Email:</strong> {organizerEmail}</p>
      </div>

     {volunteersNeeded === 0 ? (
  <p className="mt-6 text-red-400 font-bold text-lg"> Sorry, no more volunteers needed for this post.</p>
) : (
  <Link to={`/applyVolunteer/${_id}`}>
    <button
      className="mt-6 px-5 py-2 bg-blue-600 text-white rounded cursor-pointer"
    >
      Be a Volunteer
    </button>
  </Link>
)}


      
    </div>
   </div>
  );
};

export default VolunteerDetails;
