import React from 'react';
// import { motion } from "motion/react"
import RollingGallery from './Rolling/RollingGallery';
import { motion } from 'framer-motion'; 

const Banner = () => {
    return (
      <div>
       <div className="carousel  ">
  <div id="slide1" className="carousel-item relative w-full">
    <img 
      src="https://i.postimg.cc/Fs2cp1JW/Screenshot-2025-08-10-203014.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.postimg.cc/Vvt7Gp42/Screenshot-2025-08-10-203815.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle text-green-950 dark:text-green-200">❮</a>
      <a href="#slide3" className="btn btn-circle text-green-950 dark:text-green-200">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.postimg.cc/q7nz7Gb4/Screenshot-2025-08-10-204047.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle text-green-950 dark:text-green-200">❮</a>
      <a href="#slide4" className="btn btn-circle text-green-950 dark:text-green-200">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.postimg.cc/W1ddBV0D/Screenshot-2025-08-10-203957.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
<div className='py-6'>
 

<RollingGallery autoplay={true} pauseOnHover={true} />
</div>

</div>
    );
};

export default Banner;