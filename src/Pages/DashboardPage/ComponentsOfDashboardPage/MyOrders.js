import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from '../../../SharedComponents/Loader/Loader';
import MyOrdersCard from './MyOrdersCard';

const MyOrders = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const closeModal = () => {
        setDeleteProduct(null);
    }
    const { user } = useContext(AuthContext)
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = (product) => {
        fetch(`http://localhost:5000/bookings/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${product.item_name} Removed successfully`);
                    refetch();
                }
            })
    }
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='text-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            {
                products?.map(product => <MyOrdersCard
                    key={product._id}
                    product={product}
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                    handleDelete={handleDelete}
                    closeModal={closeModal}
                ></MyOrdersCard>)
            }
        </div>
    );
};

export default MyOrders;