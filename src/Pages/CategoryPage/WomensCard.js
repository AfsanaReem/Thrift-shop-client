import React from 'react';
import { TiTick } from "react-icons/ti";
import BookingModal from '../../SharedComponents/BookingModal';

const WomensCard = ({ womensProduct }) => {
    const { image, name, resell_price, buying_price, condition, location, sellers_name, verified, date } = womensProduct;

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
                            <label htmlFor="confirmation-modal" className="btn btn-primary">Book</label>
                        </div>
                    </div>
                </div>
            </div>
            {
                <BookingModal
                    product={womensProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default WomensCard;