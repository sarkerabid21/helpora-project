import React, { Suspense } from 'react';
import MyRequestLists from './MyRequestLists';
import useAuth from '../../hooks/useAuth';
import { myRequestPromise } from '../../api/applyApi';

const MyRequestPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <Suspense fallback={'loading'}>
        <MyRequestLists myRequestPromise={myRequestPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyRequestPage;
