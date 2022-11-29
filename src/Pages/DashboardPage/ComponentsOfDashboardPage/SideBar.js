import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useBuyer from '../../../hooks/useBuyer';
import useSeller from '../../../hooks/useSeller';

const SideBar = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            {
                isBuyer &&
                <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
            }
            {
                isSeller && <>
                    <li><Link to='/dashboard/my-products'>My Products</Link></li>
                    <li><Link to='/dashboard/add-a-product'>Add A Product</Link></li>
                </>
            }
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