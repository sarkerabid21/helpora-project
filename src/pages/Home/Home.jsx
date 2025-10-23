import React, { Suspense } from 'react';
import Banner from './Banner';
import Success from './FAQ';
import VolNeeds from './VolNeeds';
import Companies from './Companies';
import ScrollToTopButton from '../Shared/ScrollBottomToTop/ScrollToTopButton';
import { WorldMap } from './WorldMap';
import loadingLottie from '../../assets/loading.json';
import Lottie from 'lottie-react';

const Home = () => {
  const volunteerPromise = fetch('https://volunteer-server-blush.vercel.app/volunteer', {
    credentials: 'include'
  }).then(res => res.json());

  return (
    <div className="bg-cover bg-center bg-fixed">
      <Banner />
      <Suspense fallback={<Lottie className='my-10' animationData={loadingLottie} loop={true} />}>
        <VolNeeds volunteerPromise={volunteerPromise} />
      </Suspense>

      <section className='w-11/12 mx-auto my-6'>
        <Companies />
      </section>

      <div className="p-10">
        <h1 className="text-xl md:text-4xl text-center font-bold mb-4">
          Connecting Volunteers Worldwide
        </h1>
        <WorldMap
          dots={[
            { start: { lat: 64.2, lng: -149.5 }, end: { lat: 34.05, lng: -118.24 } },
            { start: { lat: 51.5, lng: -0.12 }, end: { lat: 28.6, lng: 77.2 } },
            { start: { lat: -15.79, lng: -47.89 }, end: { lat: 38.72, lng: -9.13 } },
          ]}
        />
      </div>
<div>
        <ScrollToTopButton />
      </div>
      <Success />
    </div>
  );
};

export default Home;