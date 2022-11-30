import React from 'react';
import BookingModal from '../../../SharedComponents/BookingModal';

const AdvertisedCards = ({ adProduct }) => {
    const { image, name, resell_price, buying_price, condition, sold } = adProduct

    return (
        <div>
            <div className='ml-2'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Price:{resell_price}</p>
                        <p>Buying Price:{buying_price}</p>
                        <p>Condition: {condition}</p>
                        <div className="card-actions">
                            {sold ? <button className='btn btn-primary text-white'>Sold</button> : <label
                                htmlFor="booking-modal"
                                className="btn btn-primary text-white">
                                Book Now</label>}
                        </div>
                    </div>
                </div>
            </div>
            {
                <BookingModal
                    product={adProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default AdvertisedCards;