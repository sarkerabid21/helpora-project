import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import MyPostedNeeds from './MyPostedNeeds';
import { myNeedsPromise } from '../../api/needApi';
import loadingLottie from '../../assets/loading.json';
import Lottie from 'lottie-react';
const MyPosts = () => {

    const {user} = useAuth();
    return (
        <div>
            
            <Suspense fallback={<Lottie className='my-10' animationData={loadingLottie} loop={true} />}>
                <MyPostedNeeds myNeedsPromise={myNeedsPromise(user.email)}></MyPostedNeeds>
            </Suspense>
        </div>
    );
};

export default MyPosts;