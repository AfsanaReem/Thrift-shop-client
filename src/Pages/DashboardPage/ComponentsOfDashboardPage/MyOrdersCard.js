import React from 'react';
import ConfirmationModal from '../../../SharedComponents/ConfirmationModal';

const MyOrdersCard = ({ product, deleteProduct, setDeleteProduct, handleDelete, closeModal }) => {
    const { item_name: name, price: resell_price, image, number, meeting_location } = product
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
                        <p>Number:{number}</p>
                        <p>Meeting Location:{meeting_location}</p>
                        <div className="card-actions">
                            <label onClick={() => setDeleteProduct(product)} htmlFor="confirmation-modal" className="btn btn-primary">Remove</label>
                        </div>
                    </div>
                </div>
            </div>
            {
                deleteProduct && <ConfirmationModal
                    title={`Do you want to delete this product?`}
                    body={`If you delete ${product.item_name}. It will be removed permanently.`}
                    successModal={handleDelete}
                    closeModal={closeModal}
                    modalData={deleteProduct}></ConfirmationModal>
            }
        </div>
    );
};

export default MyOrdersCard;