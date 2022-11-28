import React, { useEffect, useState } from 'react';
import axios from 'axios';
const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users/buyer')
            .then(data => setBuyers(data.data))
    }, [])
    return (
        <div>
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
                                    <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;