import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MensCard from './MensCard';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Mens = () => {
    const navigate = useNavigate()
    const [mensProducts, setMensProducts] = useState([]);
    useEffect(() => {
        axios.get('https://thrift-shop-server.vercel.app/products/mens')
            .then(data => setMensProducts(data.data))
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
        <div className='text-center mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                mensProducts &&
                mensProducts?.map((mensProduct, i) => <MensCard
                    key={i}
                    mensProduct={mensProduct}
                    handleReport={handleReport}></MensCard>
                )
            }
        </div>
    );
};

export default Mens;