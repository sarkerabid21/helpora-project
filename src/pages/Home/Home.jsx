import React from 'react';
import Banner from './Banner';
import Success from './FAQ';

const Home = () => {
    return (
        <div className='bg-[#feefc7] min-h-screen'>
            <Banner></Banner>
            <Success></Success>
        </div>
    );
};

export default Home;