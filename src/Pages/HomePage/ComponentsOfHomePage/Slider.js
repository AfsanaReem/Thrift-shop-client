import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">

                    <div className='w-full hero' style={{
                        backgroundImage: `url("https://i.ibb.co/8PSpYwL/Mens.jpg")`, height: '100vh',
                        fontSize: '50px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-5xl font-bold">Welcome to thrift shop!</h1>
                                <p className="mb-5">Here you can bye or sell gently used clothes at discounted price!</p>
                            </div>
                        </div>
                        {/* <div className='decoration-dotted	 underline decoration-black text-white text-center mt-64 font-extrabold'>
                            <h5></h5>
                            <p>Here you can bye or sell gently used clothes at discounted price!</p>
                        </div> */}
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <></>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='w-full hero' style={{
                        backgroundImage: `url("https://i.ibb.co/pbJ0HW1/Womens.jpg")`, height: '100vh',
                        fontSize: '50px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-5xl font-bold">Have any clothes to sell?</h1>
                                <p className="mb-5">Create a seller account and start selling!</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <></>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Slider;