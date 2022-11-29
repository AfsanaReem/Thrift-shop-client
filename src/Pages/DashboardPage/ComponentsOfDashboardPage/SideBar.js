import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';

const SideBar = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
            <li><Link to='/dashboard/my-products'>My Products</Link></li>
            <li><Link to='/dashboard/add-a-product'>Add A Product</Link></li>
            {
                isAdmin && <>
                    <li><Link to='/dashboard/all-buyers'>All Buyers</Link></li>
                    <li><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                    <li><Link to='/dashboard/reported-items'>Reported Items</Link></li>
                </>
            }
        </div>
    );
};

export default SideBar;