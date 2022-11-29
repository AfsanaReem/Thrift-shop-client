import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useBuyer from '../hooks/useBuyer';
import Loader from '../SharedComponents/Loader/Loader';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

    if (loading || isBuyerLoading) {
        return <Loader></Loader>
    }
    if (user && isBuyer) {
        return children;
    }
    return <p className='text-5xl text-center'>You are not Buyer.<br /> Please Login with a Buyer Account.</p>;
};

export default BuyerRoute;