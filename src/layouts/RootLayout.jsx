import React, { useState } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import { Outlet, useLocation } from 'react-router';

const RootLayout = () => {
  const [isTableLayout, setIsTableLayout] = useState(false);

  const toggleLayout = () => {
    setIsTableLayout(prev => !prev);
  };

  const location = useLocation();

  return (
    <>
      {/* <Navba
        toggleLayout={toggleLayout}
        isTableLayout={isTableLayout}
        currentPath={location.pathname}
      /> */}
      <Navbar
      toggleLayout={toggleLayout}
        isTableLayout={isTableLayout}
        currentPath={location.pathname}
        ></Navbar>
      
      {/* Pass layout state as context or via props */}
      <Outlet context={{ isTableLayout }} />
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
