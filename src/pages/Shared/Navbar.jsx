import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import ThemeToggle from './ThemeToggle';
import { motion } from "motion/react";
import { TbLayoutListFilled, TbLayoutDashboardFilled } from "react-icons/tb";

const Navbar = ({ toggleLayout, isTableLayout, currentPath }) => {

  const showLayoutToggle = currentPath === '/allNeeds';

    const {user, signOutUser} = use(AuthContext)
    const handleSignOut = () =>{
        signOutUser()
        .then(()=> {
            console.log('sign out')
        }).catch(error => {
    console.log(error)
  });
    } 

    const links = <>
     <li><NavLink to="/">Home</NavLink></li>
     
     {
      user && <>
      <li><NavLink to="/addNeeds">Add Needs</NavLink></li>
      <li><NavLink to="/allNeeds">All Needs</NavLink></li>
      </>
     }
     {
      user && <>
      <div className="dropdown dropdown-start">
  <div tabIndex={0}  className="btn shadow-none h-8 bg-teal-600 border-0 m-1">My Posts</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><NavLink to="/myRequests">My Volunteer Request Post</NavLink></li>
    <li><NavLink to="/myPosts">My volunteer need post
</NavLink></li>
    
  </ul>
</div>

      
      </>
     }
     
        
    </>
    return (
        <div className="navbar  bg-[#0D9488] shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><NavLink to="/">Home</NavLink></li>
     
     {
      user && <>
      <li><NavLink to="/addNeeds">Add Needs</NavLink></li>
      <li><NavLink to="/allNeeds">All Needs</NavLink></li>
      </>
     }
     {
      user && <>
      <div className="dropdown dropdown-start">
  <div tabIndex={0}  className="btn shadow-none h-8  border-0 m-1">My Posts</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><NavLink to="/myRequests">My Volunteer Request Post</NavLink></li>
    <li><NavLink to="/myPosts">My volunteer need post
</NavLink></li>
    
  </ul>
</div>

      
      </>
     }
     
       
      </ul>
    </div>
    <div className='flex items-center gap-3'>
    <img className='w-[5%]' src='https://i.ibb.co/YFb1Xj41/Screenshot-2025-06-04-211718-removebg-preview.pnghttps://i.ibb.co/WWkdB1Rx/Screenshot-2025-05-20-012215.png' alt=""/>
    <h1 className='font-bold'><motion.span
                            animate={
                                {
                                    color: ['#ff5733', '#33ff33', '#FFA55D'],
                                    transition: { duration: 2, repeat: Infinity }
                                }}
                        >HELP</motion.span>ORA</h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  
  <div className="navbar-end flex items-center gap-3">
    {
        user ? <button onClick={handleSignOut} className='btn'>Sign Out</button> :
        <>
        <NavLink className="btn" to="/signin">SignIn</NavLink>
    <NavLink className="btn" to="/register">Register</NavLink>
        </>
    }
    <ThemeToggle></ThemeToggle>

      
        {showLayoutToggle && (
          <button  onClick={toggleLayout} className=" text-2xl cursor-pointer">
            {isTableLayout ? <TbLayoutListFilled /> : <TbLayoutDashboardFilled />}
          </button>
        )}

       
  </div>
</div>
    );
};

export default Navbar;