import React from 'react';

const Slider = () => {
    return (
        <div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">

                    <div className='w-full' style={{
                        backgroundImage: `url("https://i.ibb.co/8PSpYwL/Mens.jpg")`, height: '100vh',
                        fontSize: '50px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <div className='text-white text-center mt-64 font-extrabold'>
                            <h5>Welcome to thrift shop!</h5>
                            <p>Here you can bye or sell gently used clothes at discounted price!</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <></>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='w-full' style={{
                        backgroundImage: `url("https://i.ibb.co/pbJ0HW1/Womens.jpg")`, height: '100vh',
                        fontSize: '50px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className='text-white text-center mt-64 font-extrabold'>
                            <h5>Have any clothes to sell?</h5>
                            <p>Create a seller account and start selling!</p>
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