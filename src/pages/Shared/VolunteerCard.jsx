import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const VolunteerCard = ({ job }) => {
  const { title, thumbnail, category, deadline, _id, volunteersNeeded } = job;

  // 🔔 Handler for the button
  const handleViewDetails = () => {
    if (volunteersNeeded === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Volunteer Not Needed',
        text: 'Sorry, all volunteer positions for this post have been filled!',
        confirmButtonColor: '#3085d6',
        
      });
    } else {
      window.location.href = `/volunteer/${_id}`; // Use navigate() if using react-router-dom v6
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={thumbnail} alt="Post Thumbnail" />
      </figure>
      
      <div className="card-body">
        <h2 className="card-title">{title}
          <div className="badge badge-secondary w-[50%]">{category}</div>
        </h2>
        <p className="font-bold">Deadline: {deadline}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleViewDetails}
            className="btn btn-primary"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
