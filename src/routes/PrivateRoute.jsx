import React, { use, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Lottie from 'lottie-react';
import loadingLottie from '../assets/loading.json';

const PrivateRoute = ({children}) => {
const { user,loading } = useContext(AuthContext);
const location = useLocation();
console.log(location)

if(loading){
    return <Lottie className='my-10' animationData={loadingLottie} loop={true} />
}

if(!user){
   return <Navigate to='/signin' state={location.pathname}></Navigate>
}

    return children;
};

export default PrivateRoute;