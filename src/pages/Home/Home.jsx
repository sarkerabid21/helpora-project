import React, { Suspense } from 'react';
import Banner from './Banner';
import Success from './FAQ';
import VolNeeds from './VolNeeds';
import Companies from './Companies';

const Home = () => {

    const volunterPromise = fetch('https://volunteer-servers.vercel.app/volunteer')
    .then(res => res.json())

    return (
        <div className="bg-cover  bg-center bg-fixed">
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
                <VolNeeds volunterPromise={volunterPromise}></VolNeeds>
            </Suspense>
           <section className='w-11/12 mx-auto my-6'>
             <Companies></Companies>
           </section>
            <Success></Success>

        </div>
    );
};

export default Home;