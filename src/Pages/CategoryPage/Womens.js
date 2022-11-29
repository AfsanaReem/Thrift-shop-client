import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WomensCard from './WomensCard';
const Womens = () => {
    const [womensProducts, setWomensProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products/womens')
            .then(data => setWomensProducts(data.data))
    }, [])
    return (
        <div className='text-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            {
                womensProducts &&
                womensProducts?.map((womensProduct, i) => <WomensCard
                    key={i}
                    womensProduct={womensProduct}></WomensCard>
                )
            }
        </div>
    );
};

export default Womens;