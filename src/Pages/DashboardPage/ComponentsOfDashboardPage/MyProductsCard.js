import React from 'react';
import ConfirmationModal from '../../../SharedComponents/ConfirmationModal';

const MyProductsCard = ({ product, deleteProduct, setDeleteProduct, handleDelete, closeModal, handleAdvertise }) => {
    const { name, buying_price, resell_price, image, condition } = product

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
                            {
                                product?.advertised ?
                                    <button disabled className="btn btn-primary">Advertised</button>
                                    :
                                    <button onClick={() => handleAdvertise(product)} className="btn btn-primary">Advertise</button>
                            }
                            <label onClick={() => setDeleteProduct(product)} htmlFor="confirmation-modal" className="btn btn-primary">Delete</label>
                        </div>
                    </div>
                </div>
            </div>
            {
                deleteProduct && <ConfirmationModal
                    title={`Do you want to delete this product?`}
                    body={`If you delete ${product.name}. It will be removed permanently.`}
                    successModal={handleDelete}
                    closeModal={closeModal}
                    modalData={deleteProduct}></ConfirmationModal>
            }
        </div>
    );
};

export default MyProductsCard;