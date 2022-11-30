import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../SharedComponents/ConfirmationModal';
const ReportedItems = () => {
    const navigate = useNavigate();
    const [reportedItems, setReportedItems] = useState([]);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }
    useEffect(() => {
        axios.get('http://localhost:5000/products/reported')
            .then(data => setReportedItems(data.data))
    }, [deletingProduct])

    const handleDelete = (product) => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Deleted successfully');
                    navigate(0);
                }
            })
    }
    return (
        <div className='mx-auto w-full'>
            <h3 className="text-3xl mb-5">Reported Items</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Seller's Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedItems?.map((reportedItem, i) =>
                                <tr className="hover" key={i}>
                                    <th>{i + 1}</th>
                                    <td>{reportedItem.name}</td>
                                    <td>{reportedItem.email}</td>
                                    <td>{<label onClick={() => setDeletingProduct(reportedItem)} htmlFor="confirmation-modal" className="btn btn-xs btn-danger">Delete</label>
                                    }</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure to delete?`}
                    body={`If you delete ${deletingProduct.name}. It will be removed permanently.`}
                    successModal={handleDelete}
                    closeModal={closeModal}
                    modalData={deletingProduct}></ConfirmationModal>
            }
        </div>
    );
};

export default ReportedItems;