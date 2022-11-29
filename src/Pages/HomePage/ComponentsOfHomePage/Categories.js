import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
            <div className='my-6'>
                <div className="card h-56 w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/rym577f/mens.jpg" alt="Mens" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mens Collection</h2>
                        <p>See All Mens Products</p>
                        <div className="card-actions justify-end">
                            <Link to='/mens' className="btn btn-primary">See All</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-6'>
                <div className="card h-56 w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/CQZfcHr/womens.jpg" alt="Women's" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Women's Collection</h2>
                        <p>See All Women's Products</p>
                        <div className="card-actions justify-end">
                            <Link to='/womens' className="btn btn-primary">See All</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-6'>
                <div className="card h-56 w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/fMxz7pr/kids.jpg" alt="kids" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kids Collection</h2>
                        <p>See All Kids Products</p>
                        <div className="card-actions justify-end">
                            <Link to='/kids' className="btn btn-primary">See All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;