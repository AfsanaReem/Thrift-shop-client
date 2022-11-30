import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from '../../../SharedComponents/Loader/Loader';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const closeModal = () => {
        setDeleteProduct(null);
    }
    const { user } = useContext(AuthContext)
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://thrift-shop-server.vercel.app/products?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = (product) => {
        fetch(`https://thrift-shop-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${product.name} deleted successfully`);
                    refetch();
                }
            })
    }

    const handleAdvertise = (product) => {
        fetch(`https://thrift-shop-server.vercel.app/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Advertised Successfully.');
                    refetch();
                }
            })
    }
    const handleSold = (product) => {
        fetch(`https://thrift-shop-server.vercel.app/products/sold/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Marked as sold Successfully.');
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
                products?.map(product => <MyProductsCard
                    key={product._id}
                    product={product}
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                    handleDelete={handleDelete}
                    closeModal={closeModal}
                    handleAdvertise={handleAdvertise}
                    handleSold={handleSold}
                ></MyProductsCard>)
            }
        </div>
    );
};

export default MyProducts;