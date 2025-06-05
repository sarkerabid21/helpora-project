import React, { Suspense } from 'react';
import Banner from './Banner';
import Success from './FAQ';
import VolNeeds from './VolNeeds';

const Home = () => {

    const volunterPromise = fetch('http://localhost:5000/volunteer')
    .then(res => res.json())

    return (
        <div className='bg-[#feefc7] min-h-screen'>
            <Banner></Banner>
            <Suspense fallback={'loading'}>
                <VolNeeds volunterPromise={volunterPromise}></VolNeeds>
            </Suspense>
            <Success></Success>
        </div>
    );
};

export default Home;