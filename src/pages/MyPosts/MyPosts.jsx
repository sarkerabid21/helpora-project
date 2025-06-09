import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import MyPostedNeeds from './MyPostedNeeds';
import { myNeedsPromise } from '../../api/needApi';

const MyPosts = () => {

    const {user} = useAuth();
    return (
        <div>
            
            <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
                <MyPostedNeeds myNeedsPromise={myNeedsPromise(user.email)}></MyPostedNeeds>
            </Suspense>
        </div>
    );
};

export default MyPosts;