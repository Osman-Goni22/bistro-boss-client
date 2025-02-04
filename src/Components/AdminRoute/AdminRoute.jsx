import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../Providers/AuthProviders';

const AdminRoute = ({children}) => {
    const location = useLocation();
    const [ isAdmin, isPending] = useAdmin();
    console.log(isAdmin, isPending);

    const {user,loading} = useContext(AuthContext)
    if(loading || isPending){
        return <h2>Loading........</h2>
    }

    if(user && isAdmin){
        return children;
    }
    return (
        <Navigate state={{ from:location }} replace to='/'></Navigate>
    );
};

export default AdminRoute;