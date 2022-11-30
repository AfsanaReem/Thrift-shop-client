import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KidsCard from './KidsCard';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Kids = () => {
    const navigate = useNavigate()
    const [kidsProducts, setKidsProducts] = useState([]);
    useEffect(() => {
        axios.get('https://thrift-shop-server.vercel.app/products/kids')
            .then(data => setKidsProducts(data.data))
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
        < div className='text-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
            {
                kidsProducts &&
                kidsProducts?.map((kidsProduct, i) => <KidsCard
                    key={i}
                    kidsProduct={kidsProduct}
                    handleReport={handleReport}></KidsCard>
                )
            }
        </div >
    );
};

export default Kids;