import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Loader from '../SharedComponents/Loader/Loader';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }
    if (user && isAdmin) {
        return children;
    }
    return <p className='text-5xl text-center'>You are not Admin.<br /> Please Login with an Admin Account.</p>;
};

export default AdminRoute;