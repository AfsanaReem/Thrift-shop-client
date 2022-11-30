import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../SharedComponents/ConfirmationModal';
import toast from 'react-hot-toast';
const AllBuyers = () => {
    const navigate = useNavigate();
    const [buyers, setBuyers] = useState([]);
    const [deletingUser, setDeletingUser] = useState(null);
    const closeModal = () => {
        setDeletingUser(null);
    }
    useEffect(() => {
        axios.get('http://localhost:5000/users/buyer')
            .then(data => setBuyers(data.data))
    }, [deletingUser])

    const handleDelete = (buyer) => {
        fetch(`http://localhost:5000/users/${buyer._id}`, {
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
            <h3 className="text-3xl mb-5">All Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers?.map((buyer, i) =>
                                <tr className="hover" key={i}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{<label onClick={() => setDeletingUser(buyer)} htmlFor="confirmation-modal" className="btn btn-xs btn-danger">Delete</label>
                                    }</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure to delete?`}
                    body={`If you delete ${deletingUser.name}. It will be removed permanently.`}
                    successModal={handleDelete}
                    closeModal={closeModal}
                    modalData={deletingUser}></ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;