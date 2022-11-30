import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdvertisedCards from './AdvertisedCards';
const AdvertisedItems = () => {
    const [adProducts, setAdProducts] = useState([]);
    useEffect(() => {
        axios.get('https://thrift-shop-server.vercel.app/products/advertised')
            .then(data => setAdProducts(data.data))
    }, [])
    return (
        <div className='text-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                adProducts?.map((adProduct, i) => <AdvertisedCards
                    key={i}
                    adProduct={adProduct}></AdvertisedCards>
                )
            }
        </div>
    );
};

export default AdvertisedItems;