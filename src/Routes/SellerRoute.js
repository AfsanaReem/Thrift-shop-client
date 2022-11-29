import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useSeller from '../hooks/useSeller';
import Loader from '../SharedComponents/Loader/Loader';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);

    if (loading || isSellerLoading) {
        return <Loader></Loader>
    }
    if (user && isSeller) {
        return children;
    }
    return <p className='text-5xl text-center'>You are not Seller.<br /> Please Login with a Seller Account.</p>;
};

export default SellerRoute;