import React, { useState } from 'react';

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
     
      <Navbar
      toggleLayout={toggleLayout}
        isTableLayout={isTableLayout}
        currentPath={location.pathname}
        ></Navbar>
      
      <Outlet context={{ isTableLayout }} />
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
