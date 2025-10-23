import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import ThemeToggle from "./ThemeToggle";
// import { Link, NavLink } from "react-router-dom";
import { PagesMenu } from "./PagesMenu";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Signed out"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar w-full bg-green-200 dark:bg-gray-900 shadow-sm px-4 sm:px-6 lg:px-12">
      {/* Left: Logo + Mobile Menu Button */}
      <div className="navbar-start">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden btn btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <img
            className="w-[50px] hidden lg:block"
            src="https://i.ibb.co/YFb1Xj41/Screenshot-2025-06-04-211718-removebg-preview.png"
            alt="Logo"
          />
          <h1 className="text-teal-800 font-bold dark:text-green-200 hidden lg:block">
            HELPORA
          </h1>
        </div>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-green-900 dark:text-green-200">
          <li><NavLink to="/">Home</NavLink></li>
          <li><PagesMenu /></li>
          <li><NavLink to="/allNeeds">All Needs</NavLink></li>
          <li><NavLink to="/donations">Donations</NavLink></li>
          <li><NavLink to="/donnorlist">Donorlist</NavLink></li>
          {user && (
            <>
              <li><NavLink to="/addNeeds">Add Needs</NavLink></li>
              <li><NavLink to="/myPosts">My Post</NavLink></li>
            </>
          )}
        </ul>
      </div>

      {/* Right: Actions */}
      <div className="navbar-end flex items-center gap-3">
  {user ? (
    <>
      <div className="dropdown dropdown-end hidden lg:block">
        <div
          tabIndex={0}
          role="button"
          className="btn p-0 w-10 h-10 min-h-0 rounded-full border-0 overflow-hidden"
        >
          {user?.photoURL ? (
            <img src={user.photoURL} alt="profile" />
          ) : (
            <img src="/default-avatar.png" alt="default" />
          )}
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow z-[1000]"
        >
          <li>
            <span className="font-semibold text-sm">{user?.displayName}</span>
          </li>
          <li>
            <button onClick={handleSignOut}className="btn bg-red-400" >Sign out</button>
          </li>
        </ul>
      </div>

      <h1 className="text-teal-800 font-bold dark:text-green-200">HELPORA</h1>
    </>
  ) : (
    <>
      <NavLink className="text-green-950 dark:text-green-200 btn" to="/signin">
        Sign In
      </NavLink>
      <NavLink className="text-green-950 dark:text-green-200 btn" to="/register">
        Register
      </NavLink>
    </>
  )}

  <div className="p-1 hidden lg:block md:block bg-yellow-300 dark:bg-purple-700 rounded-full">
    <ThemeToggle className="text-green-950 dark:text-green-200 cursor-pointer" />
  </div>
</div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-green-100 dark:bg-gray-800 p-4 lg:hidden z-50">
          <ul className="flex flex-col gap-3 text-green-900 dark:text-green-200">
            <li><NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink></li>
            <li><PagesMenu mobileMode={true} /></li>
            <li><NavLink to="/allNeeds" onClick={() => setMobileOpen(false)}>All Needs</NavLink></li>
            <li><NavLink to="/donations" onClick={() => setMobileOpen(false)}>Donations</NavLink></li>
            {user && (
              <>
                <li><NavLink to="/addNeeds" onClick={() => setMobileOpen(false)}>Add Needs</NavLink></li>
                <li><NavLink to="/myPosts" onClick={() => setMobileOpen(false)}>My Post</NavLink></li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
