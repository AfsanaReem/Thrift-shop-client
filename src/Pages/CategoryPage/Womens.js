import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WomensCard from './WomensCard';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Womens = () => {
    const navigate = useNavigate();
    const [womensProducts, setWomensProducts] = useState([]);
    useEffect(() => {
        axios.get('https://thrift-shop-server.vercel.app/products/womens')
            .then(data => setWomensProducts(data.data))
    }, [])
    const handleReport = (product) => {
        fetch(`https://thrift-shop-server.vercel.app/products/report/${product._id}`, {
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
                    toast.success('Reported Successfully.');
                    navigate(0);
                }
            })
    }
    return (
        <div className='text-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                womensProducts &&
                womensProducts?.map((womensProduct, i) => <WomensCard
                    key={i}
                    womensProduct={womensProduct}
                    handleReport={handleReport}></WomensCard>
                )
            }
        </div>
    );
};

export default Womens;