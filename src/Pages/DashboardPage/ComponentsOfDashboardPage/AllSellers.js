import React, { useEffect, useState } from 'react';
import axios from 'axios';
const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users/seller')
            .then(data => setSellers(data.data))
    }, [])
    return (
        <div>
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
                                            <td><button className='btn btn-xs btn-danger'>Verify</button></td>
                                    }
                                    <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;