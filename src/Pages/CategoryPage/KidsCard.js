import React from 'react';
import { TiTick } from "react-icons/ti";
import BookingModal from '../../SharedComponents/BookingModal';

const KidsCard = ({ kidsProduct, handleReport }) => {
    const { image, name, resell_price, buying_price, condition, location, sellers_name, verified, date, sold, reported } = kidsProduct;

    return (
        <div>
            <div className='ml-2'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Location: {location}</p>
                        <p>Resell Price:{resell_price}</p>
                        <p>Buying Price:{buying_price}</p>
                        <p>Condition: {condition}</p>
                        <p>Posted Time: {date}</p>
                        {verified ?
                            <div className='flex'><p>Sellers Name: {sellers_name}</p>
                                <TiTick className='mt-1' /></div>
                            :
                            <p>Sellers Name: {sellers_name}</p>}
                        <div className="card-actions">
                            {sold ? <button className='btn btn-primary text-white'>Sold</button> : <label
                                htmlFor="booking-modal"
                                className="btn btn-primary text-white">
                                Book Now</label>}
                            {reported ? <button className='btn btn-primary text-white'>Reported</button> : <button onClick={() => handleReport(kidsProduct)} className='btn btn-primary text-white'>Report To Admin</button>}
                        </div>
                    </div>
                </div>
            </div>
            {
                <BookingModal
                    product={kidsProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default KidsCard;