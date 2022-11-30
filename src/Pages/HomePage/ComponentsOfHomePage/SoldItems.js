import React from 'react';

const SoldItems = () => {
    return (
        <div className='my-6'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl">Welcome to Thrift Shop!</h2>
                    <p className='text-3xl'>Here you can create a seller account to sell your used/unused clothing items.<br /> And you can also sign up as a buyer.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoldItems;