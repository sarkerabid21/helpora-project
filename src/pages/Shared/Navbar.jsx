import React, { useContext } from 'react';
// import { Link, NavLink } from 'react;
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import ThemeToggle from './ThemeToggle';
import { TbLayoutListFilled, TbLayoutDashboardFilled } from "react-icons/tb";
import { Link, NavLink } from 'react-router';
import { PagesMenu } from './PagesMenu';

const Navbar = ({ toggleLayout, isTableLayout, currentPath }) => {
  const { user, signOutUser } = useContext(AuthContext);

  const showLayoutToggle = currentPath === '/';

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log('Signed out'))
      .catch(error => console.error(error));
  };

  // const pagesDropdown = (
  //   <ul className="p-2 bg-base-100 rounded-box w-52">
  //     <li><NavLink to="/about">About Us</NavLink></li>
  //     <li><NavLink to="/our-team">Our Team</NavLink></li>
  //     <li><NavLink to="/team-single">Team Single</NavLink></li>
  //     <li><NavLink to="/our-mission">Our Mission</NavLink></li>
  //     <li><NavLink to="/services">Services</NavLink></li>
  //     <li><NavLink to="/faq">FAQ</NavLink></li>
  //     <li><NavLink to="/shop">Shop</NavLink></li>
  //     <li><NavLink to="/coming-soon">Coming Soon</NavLink></li>
  //     <li><NavLink to="/elements">Elements</NavLink></li>
  //     <li><NavLink to="/typography">Typography</NavLink></li>
  //   </ul>
  // );

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      
      <li>
        <PagesMenu/>
        {/* <details className="dropdown hidden lg:flex">
          <summary className="btn p-0 w-10 h-10 min-h-0 border-0 overflow-hidden">Pages</summary>
          {pagesDropdown}
        </details> */}
      </li>
      <li><NavLink to="/allNeeds">All Needs</NavLink></li>
      <li><NavLink to="/donations">Donations</NavLink></li>
      <li><NavLink to="/portfolio">Portfolio</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/addNeeds">Add Needs</NavLink></li>
          <li><NavLink to="/myRequests">Be Volunteer</NavLink></li>
          <li><NavLink to="/myRequests">My Requests</NavLink></li>
          <li><NavLink to="/myPosts">My Post</NavLink></li>
        </>
      )}
    </>
  );

  return (
  
    <div className="navbar  bg-[#add2a7] shadow-sm border-0 px-4 sm:px-6 lg:px-12">
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {user && (
              <details className="dropdown">
                <summary className="btn p-0 w-10 h-10 min-h-0 rounded-full border-0 overflow-hidden">
                  {user?.photoURL && <img src={user.photoURL} alt="profile" />}
                </summary>
                <li><span className="block w-full text-sm">{user?.displayName}</span></li>
                <li><Link onClick={handleSignOut}>Sign out</Link></li>
              </details>
            )}
            <li><NavLink to="/">Home</NavLink></li>
            <li><PagesMenu /></li>
            <PagesMenu />
            <li><NavLink to="/allNeeds">All Needs</NavLink></li>
            <li><NavLink to="/donations">Donations</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            {user && (
              <>
                <li><NavLink to="/addNeeds">Add Needs</NavLink></li>
                <li><NavLink to="/myRequests">Be Volunteer</NavLink></li>
                <li><NavLink to="/myRequests">My Request</NavLink></li>
                <li><NavLink to="/myPosts">My Post</NavLink></li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <div className='flex items-center gap-3'>
          <img className='w-[50px]' src='https://i.ibb.co/YFb1Xj41/Screenshot-2025-06-04-211718-removebg-preview.png' alt="Logo" />
          <h1 className='font-bold'>HELPORA</h1>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right section */}
      <div className="navbar-end flex items-center gap-3">
        
        {user && (
          <details className="dropdown hidden lg:flex">
            <summary className="btn p-0 w-10 h-10 min-h-0 rounded-full border-0 overflow-hidden">
              {user?.photoURL && <img src={user.photoURL} alt="profile" />}
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-64 p-2 shadow-sm mt-2">
              <li><span className="block w-full text-sm">{user?.displayName}</span></li>
              <li><Link onClick={handleSignOut}>Sign out</Link></li>
            </ul>
          </details>
        )}
        <NavLink className="btn cursor-pointer p-[3px] relative" to="/signin">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Donations
            </div>
          </NavLink>

        {user ? (
          null
        ) : (
          <>
            <NavLink className="btn" to="/signin">Sign In</NavLink>
            <NavLink className="btn" to="/register">Register</NavLink>
          </>
        )}

        {/* <ThemeToggle className="cursor-pointer" /> */}

        {showLayoutToggle && (
          <button onClick={toggleLayout} className="text-2xl cursor-pointer">
            {isTableLayout ? <TbLayoutListFilled /> : <TbLayoutDashboardFilled />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
