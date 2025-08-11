import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const VolunteerCard = ({ job }) => {
  const { title, thumbnail, category, deadline, _id, volunteersNeeded } = job;

  
  const handleViewDetails = () => {
    if (volunteersNeeded === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Volunteer Not Needed',
        text: 'Sorry, all volunteer positions for this post have been filled!',
        confirmButtonColor: '#3085d6',
        
      });
    } else {
      window.location.href = `/volunteer/${_id}`; 
    }
  };

  return (
    <div className="card dark:bg-green-100 bg-teal-50  lg:w-96 shadow-sm  w-46 mx-auto">
      <figure>
        <img src={thumbnail} alt="Post Thumbnail" />
      </figure>
      
      <div className="card-body">
        <h2 className="card-title  text-teal-900">{title}
          <div className="badge badge-secondary w-[50%]">{category}</div>
        </h2>
        <p className="font-bold  text-teal-900">Deadline: {deadline}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleViewDetails}
            className="btn px bg-teal-900 text-white  "
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
