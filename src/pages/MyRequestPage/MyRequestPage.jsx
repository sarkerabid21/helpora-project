import React, { Suspense } from 'react';
import MyRequestLists from './MyRequestLists';
import useAuth from '../../hooks/useAuth';
import { myRequestPromise } from '../../api/applyApi';

const MyRequestPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <MyRequestLists myRequestPromise={myRequestPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyRequestPage;
