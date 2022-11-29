import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../SharedComponents/ConfirmationModal';

const KidsCard = ({ kidsProduct }) => {
    const { image, name, resell_price, buying_price, condition } = kidsProduct;
    const [bookProduct, setBookProduct] = useState(null);
    const closeModal = () => {
        setBookProduct(null);
    }
    const handleBook = (product) => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Booked Successfully.');
                }
            })
    }
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
                            <label onClick={() => setBookProduct(kidsProduct)} htmlFor="confirmation-modal" className="btn btn-primary">Book</label>
                        </div>
                    </div>
                </div>
            </div>
            {
                bookProduct && <ConfirmationModal
                    title={`Do you want to delete this product?`}
                    body={`If you delete ${name}. It will be removed permanently.`}
                    successModal={handleBook}
                    closeModal={closeModal}
                    modalData={bookProduct}></ConfirmationModal>
            }
        </div>
    );
};

export default KidsCard;