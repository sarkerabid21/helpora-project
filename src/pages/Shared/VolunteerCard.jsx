import React from 'react';
import { Link, NavLink } from 'react-router';

const VolunteerCard = ({job}) => {
  const {title, thumbnail, category, deadline, _id} = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}
      <div className="badge badge-secondary w-[50%]">{category}</div>
    </h2>
    <p className='font-bold'>Deadline: {deadline} </p>
    <div className="card-actions justify-end">
      <Link to={`/volunteer/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
   
</div>

    );
};
// Thumbnail 
// Post Title 
// Category 
// Deadline 
// View Details Button.


export default VolunteerCard;