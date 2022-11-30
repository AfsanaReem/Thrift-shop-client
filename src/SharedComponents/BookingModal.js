import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const BookingModal = ({ product }) => {
    const navigate = useNavigate()
    const { _id, name, resell_price, image } = product;
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const item_name = form.item_name.value;
        const price = form.price.value;
        const number = form.number.value;
        const meeting_location = form.meeting_location.value;
        const booking = {
            productId: _id,
            buyerName: name,
            email,
            item_name,
            price,
            image,
            number,
            meeting_location
        }
        //post booking data to mongodb
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success(` Booked Successfully`)
                    navigate('/dashboard/my-orders')
                }
                else {
                    toast.error(data.message);
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{ }</h3>
                    <form onSubmit={handleBooking} className='grid grid-col-1 gap-3'>
                        <input type="text" disabled defaultValue={user?.displayName} name='name' placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="email" disabled defaultValue={user?.email} name='email' placeholder="Email" className="input input-bordered w-full" />
                        <input type="text" disabled defaultValue={name} name='item_name' placeholder="Item_name" className="input input-bordered w-full" />
                        <input type="text" disabled defaultValue={resell_price} name='price' placeholder="price" className="input input-bordered w-full" />
                        <input type="text" name='number' placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="text" name='meeting_location' placeholder="Meeting Location" className="input input-bordered w-full" />
                        <input type='submit' className='btn btn-accent'></input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;