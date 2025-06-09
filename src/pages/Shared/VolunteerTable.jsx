import React from 'react';

const VolunteerTable = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-teal-600 rounded-lg shadow">
      <table className="table w-full">
        <thead className="bg-teal-700 text-white">
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Volunteers Needed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(job => (
              <tr key={job._id}>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>{job.deadline}</td>
                <td>{job.volunteersNeeded}</td>
                <td>
                  <button
                    onClick={() => {
                      if (job.volunteersNeeded === 0) {
                        Swal.fire('All positions filled!');
                      } else {
                        window.location.href = `/volunteer/${job._id}`;
                      }
                    }}
                    className="btn btn-sm btn-primary"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerTable;
