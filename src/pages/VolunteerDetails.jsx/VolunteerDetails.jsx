// import React, { use, useState } from 'react';

import { Link, useLoaderData } from 'react-router';

// import { Link, useLoaderData } from 'react-router-dom';

const VolunteerDetails = () => {
  const {
    title, thumbnail, category, deadline, location,
    volunteersNeeded, description, organizerName, organizerEmail, _id
  } = useLoaderData();

  return (
    <div className="bg-green-100 dark:bg-teal-600 px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6">
        Volunteer Work Details
      </h1>

      <div className="bg-teal-900 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full rounded-lg mb-4 object-cover max-h-[400px]"
        />

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <p className="mt-2 text-gray-200">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-100">
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Deadline:</strong> {deadline}</p>
          <p><strong>Volunteers Needed:</strong> {volunteersNeeded}</p>
          <p><strong>Organizer:</strong> {organizerName}</p>
          <p><strong>Email:</strong> {organizerEmail}</p>
        </div>

        {volunteersNeeded === 0 ? (
          <p className="mt-6 text-red-400 font-bold text-lg">
            Sorry, no more volunteers needed for this post.
          </p>
        ) : (
          <Link to={`/applyVolunteer/${_id}`}>
            <button className="mt-6 w-full sm:w-auto px-5 py-2 bg-green-300 text-teal-900 rounded hover:bg-teal-700 hover:text-green-200 transition">
              Be a Volunteer
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default VolunteerDetails;
