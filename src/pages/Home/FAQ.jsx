import React from 'react';
import { motion } from "motion/react"

const Success = () => {
    return (
         <div className="hero bg-teal-700 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1'>
     <motion.img className='rounded-t-4xl border-l-16 border-b-16 rounded-br-4xl border-blue-500'
     animate={{y:[80,120,80]}}
     transition={{duration:4, repeat: Infinity}}
      src='https://i.ibb.co/jkfX13DZ/download-1.jpg'
    />
     <motion.img className='rounded-t-4xl border-l-16 border-b-16 rounded-br-4xl border-red-500'
     animate={{x:[100,150,100]}}
     transition={{duration:5, repeat: Infinity, delay:2}}
      src='https://i.ibb.co/VYVZTmJZ/Vilnius-Marathon-2015-volunteers-by-Augustas-Didzgalvis.jpg'
    />
     <motion.img className='rounded-t-4xl border-l-16 border-b-16 rounded-br-4xl border-green-500 '
     animate={{x:[-100,-150,-100], y:[-40,-60,-40]}
    }
     transition={{duration:6,delay:1, repeat: Infinity}}
      src='https://i.ibb.co/ZR9xBp7q/download-2.jpg'
    />
     
     
   </div>
           <div className="flex-1 mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">🤔 Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium">
            How do I become a volunteer?
          </div>
          <div className="collapse-content">
            <p>Just click on the “Be a Volunteer” button on any post and submit your interest. The organizer will review and get back to you!</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium">
            Is registration necessary to post or volunteer?
          </div>
          <div className="collapse-content">
            <p>Yes, registration/login is required for both posting needs and becoming a volunteer to ensure authenticity and security.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium">
            Can I edit or delete my posted volunteer needs?
          </div>
          <div className="collapse-content">
            <p>Absolutely. You can manage all your posts from the "Manage My Posts" section after logging in.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium">
            How are volunteers approved or confirmed?
          </div>
          <div className="collapse-content">
            <p>Initially, every volunteer request gets a default "requested" status. Organizers will contact or confirm based on their criteria.</p>
          </div>
        </div>
      </div>
    </div>

            </div>
        </div>
    );
};

export default Success;