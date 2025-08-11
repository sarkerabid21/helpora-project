import React from 'react';
import { motion } from "motion/react";
import FAQSection from '../Shared/FAQSection';

const Success = () => {
    return (
         <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1 hidden lg:block'>
     <motion.img className='rounded-t-4xl border-l-16 border-b-16 rounded-br-4xl border-blue-500'
     animate={{y:[80,120,80]}}
     transition={{duration:4, repeat: Infinity}}
      src='https://i.ibb.co/jkfX13DZ/download-1.jpg'
    />
     <motion.img className='rounded-t-4xl border-l-16 border-b-16  rounded-br-4xl border-red-500'
     animate={{x:[100,150,100]}}
     transition={{duration:5, repeat: Infinity, delay:2}}
      src='https://i.ibb.co.com/LDPTn6Hg/download-5.jpg'
    />
    
     
     
   </div>
           <div className="flex-1 mx-auto py-16 px-4">
      
      
      <FAQSection></FAQSection>
    </div>

            </div>
        </div>
    );
};

export default Success;