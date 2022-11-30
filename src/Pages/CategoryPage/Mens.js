import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MensCard from './MensCard';
const Mens = () => {
    const [mensProducts, setMensProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products/mens')
            .then(data => setMensProducts(data.data))
    }, [])
    return (
        <div className='text-center mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                mensProducts &&
                mensProducts?.map((mensProduct, i) => <MensCard
                    key={i}
                    mensProduct={mensProduct}></MensCard>
                )
            }
        </div>
    );
};

export default Mens;