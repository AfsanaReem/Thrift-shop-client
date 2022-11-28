import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../SharedComponents/Loader/Loader';
const date = new Date();


const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: user, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        category: data.category,
                        name: data.name,
                        image: imgData.data.url,
                        condition: data.condition,
                        resell_price: data.resell_price,
                        buying_price: data.buying_price,
                        location: data.location,
                        sellers_name: user[0]?.name,
                        email: user[0].email,
                        verified: user[0]?.verified,
                        date
                    }
                    //save products info to tha database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success(`${product.name} is added successfully`)
                            navigate('/dashboard/my-products')
                        })
                }
            })
    }
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='mx-auto'>
            <div className='hero'>
                <div className="card flex-shrink-0 w-full mx-auto">
                    <div className="card-body">
                        <h4 className='text-center text-2xl'>Add A Product</h4>
                        {/* react hook form onsubmit handler */}
                        <form onSubmit={handleSubmit(handleAddProduct)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select {...register("category", { required: true })} className="select select-bordered w-full">
                                    <option defaultChecked value='Men'>Men</option>
                                    <option value='Women'>Women</option>
                                    <option value='Kids'>Kids</option>
                                </select>
                                {errors.category && <p className="text-red-500" role="alert">{errors.category?.message}</p>}
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input className="input input-bordered" type='text'
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <p className="text-red-500" role="alert">{errors.name?.message}</p>}
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input className="input input-bordered" type='file'
                                    {...register("img", { required: "Photo is required" })}
                                />
                                {errors.img && <p className="text-red-500" role="alert">{errors.img?.message}</p>}
                                <label className="label">
                                    <span className="label-text">Condition</span>
                                </label>
                                <select {...register("condition", { required: true })} className="select select-bordered w-full">
                                    <option defaultChecked value='New'>New</option>
                                    <option value='Like new'>Like New</option>
                                    <option value='Good'>Good</option>
                                    <option value='Used'>Used</option>
                                </select>
                                {errors.condition && <p className="text-red-500" role="alert">{errors.condition?.message}</p>}
                                <label className="label">
                                    <span className="label-text">Resell Price</span>
                                </label>
                                <input className="input input-bordered" type='text'
                                    {...register("resell_price", { required: true })} />
                                {errors.resell_price && <p className="text-red-500" role="alert">{errors.resell_price?.message}</p>}
                                <label className="label">
                                    <span className="label-text">Buying Price</span>
                                </label>
                                <input className="input input-bordered" type='text'
                                    {...register("buying_price", { required: true })} />
                                {errors.buying_price && <p className="text-red-500" role="alert">{errors.buying_price?.message}</p>}
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input className="input input-bordered" type='text'
                                    {...register("location", { required: "Location is required" })} />
                                {errors.location && <p className="text-red-500" role="alert">{errors.location?.message}</p>}
                            </div>

                            <input className="btn btn-accent w-full mt-5" value="Add" type="submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;