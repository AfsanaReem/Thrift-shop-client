import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KidsCard from './KidsCard';
const Kids = () => {
    const [kidsProducts, setKidsProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/products/kids')
            .then(data => setKidsProducts(data.data))
    }, [])
    return (
        < div className='text-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2' >
            {
                kidsProducts &&
                kidsProducts?.map((kidsProduct, i) => <KidsCard
                    key={i}
                    kidsProduct={kidsProduct}></KidsCard>
                )
            }
        </div >
    );
};

export default Kids;