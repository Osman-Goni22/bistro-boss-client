import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
      const location = useLocation();

    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <h2>Loading........</h2>
    }

    if(user){
        return children;
    }
    return (
        <Navigate state={{ from:location }} replace to='/login'></Navigate>
    );
};

export default PrivateRoute;