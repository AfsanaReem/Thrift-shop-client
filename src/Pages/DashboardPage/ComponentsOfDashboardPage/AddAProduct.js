import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();


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
                        name: data.name,
                        image: imgData.data.url
                    }
                    console.log(product)
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
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/my-products')
                        })
                }
            })
    }
    return (
        <div>
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
                                <select {...register("condition", { required: true })} className="select select-bordered w-full">
                                    <option value='men'>Men</option>
                                    <option value='women'>Women</option>
                                    <option value='kids'>Kids</option>
                                </select>
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
                                <label className="label">
                                    <span className="label-text">Condition</span>
                                </label>
                                <select {...register("condition", { required: true })} className="select select-bordered w-full">
                                    <option value='new'>New</option>
                                    <option value='like_new'>Like New</option>
                                    <option value='good'>Good</option>
                                    <option value='used'>Used</option>
                                </select>
                                <label className="label">
                                    <span className="label-text">Resell Price</span>
                                </label>
                                <input className="input input-bordered" type='text'
                                    {...register("resell_price", { required: true })} />
                                <label className="label">
                                    <span className="label-text">Buying Price</span>
                                </label>
                                <input className="input input-bordered" type='text'
                                    {...register("buying_price", { required: true })} />
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input className="input input-bordered" type='text'
                                    {...register("location", { required: "Location is required" })} />
                                {errors.location && <p className="text-red-500" role="alert">{errors.location?.message}</p>}
                                {
                                    <>
                                        <label className="label">
                                            <span className="label-text">Seller's Name</span>
                                        </label>
                                        <input className="input input-bordered" type='text'
                                            {...register("sellers_name", { required: true })} />
                                        <label className="label">
                                            <span className="label-text">Verified</span>
                                        </label>
                                        <input className="input input-bordered" type='text'
                                            {...register("varified", { required: true })} />
                                    </>
                                }
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