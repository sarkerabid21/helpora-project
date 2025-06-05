import React, { use, useState } from 'react';
import VolApplicationRow from './VolApplicationRow';

const MyRequestLists = ({ myRequestPromise }) => {
  const initialData = use(myRequestPromise);
  const [applications, setApplications] = useState(initialData);

  const refetch = () => {
    myRequestPromise.then(data => setApplications(data));
  };

  return (
    <div className='my-6'>
      <h3 className='text-3xl text-center font-bold mb-10'>Apply for Volunteer Jobs: {applications.length}</h3>
      {
        applications.length === 0
          ? <p className='text-center text-red-500'>You haven’t applied for any volunteer request yet.</p>
          : (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Title</th>
                    <th>Deadline</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    applications.map((application, index) =>
                      <VolApplicationRow
                        key={application._id}
                        index={index}
                        application={application}
                        refetch={refetch}
                      />)
                  }
                </tbody>
              </table>
            </div>
          )
      }
    </div>
  );
};

export default MyRequestLists;
