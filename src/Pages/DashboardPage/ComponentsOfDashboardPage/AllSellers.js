import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../SharedComponents/ConfirmationModal';
import { useNavigate } from 'react-router-dom';
const AllSellers = () => {
    const navigate = useNavigate();
    const [sellers, setSellers] = useState([]);
    const [deletingUser, setDeletingUser] = useState(null);
    const closeModal = () => {
        setDeletingUser(null);
    }
    useEffect(() => {
        axios.get('http://localhost:5000/users/seller')
            .then(data => setSellers(data.data))
    }, [deletingUser])

    const handleDelete = (seller) => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
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
    const handleVerify = (seller) => {
        fetch(`http://localhost:5000/users/verify/${seller._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verified Successfully.');
                    navigate(0);
                }
            })
    }
    return (
        <div className='mx-auto w-full'>
            <h3 className="text-3xl mb-5">All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((seller, i) =>
                                <tr className="hover" key={i}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    {
                                        seller?.verified ?
                                            <td>Yes</td>
                                            :
                                            <td><button onClick={() => handleVerify(seller)} className='btn btn-xs btn-danger'>Verify</button></td>
                                    }
                                    <td>{<label onClick={() => setDeletingUser(seller)} htmlFor="confirmation-modal" className="btn btn-xs btn-danger">Delete</label>
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

export default AllSellers;