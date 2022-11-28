import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../hooks/useToken";

const SignUp = () => {
    //react-hook-form
    const { register, formState: { errors }, handleSubmit } = useForm();
    //Using auth context for firebase authentication
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    // set up errors
    const [signUpError, setSignUpError] = useState('');
    //navigation to private route from login or sign up page
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    //click handler for creating user and updating user via email and pass
    const handleSignUp = data => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)

                    })
                    .catch(error => {
                        console.error(error)
                        setSignUpError(error.message);
                    })
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message);
            })
    }
    //for saving users
    const saveUser = (name, email, role) => {
        const user = { name, email, role, verified: false }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email)
            })

    }

    //click handler for google login
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                toast('Logged In Successfully');
                navigate('/');
            })
            .catch(error => { setSignUpError(error.message) })
    }
    if (token) {
        navigate('/')
    }
    return (
        <div className='hero'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h4 className='text-center text-2xl'>Sign Up</h4>
                    {/* react hook form onsubmit handler */}
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control">
                            <select {...register("role", { required: true })} className="select select-bordered w-full">
                                <option>Seller</option>
                                <option>Buyer</option>
                            </select>
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input className="input input-bordered" type='text'
                                {...register("name", { required: "Name is required" })} />
                            {errors.name && <p className="text-red-500" role="alert">{errors.name?.message}</p>}
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className="input input-bordered" type='email'
                                {...register("email", { required: "Email is required" })} />
                            {errors.email && <p className="text-red-500" role="alert">{errors.email?.message}</p>}
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input className="input input-bordered" type='password'
                                {...register("password", {
                                    required: 'Password is required',
                                    pattern: {
                                        value: /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/
                                        , message: 'Password must have 8 characters length 2 letters in Upper Case 1 Special Character (!@#$&*)2 numerals (0-9) 3 letters in Lower Case'
                                    }
                                })} />
                            {errors.password && <p className="text-red-500" role="alert">{errors.password?.message}</p>}
                            <label className="label">
                                <span className="label-text">Forgot Password?</span>
                            </label>
                        </div>
                        {signUpError && <p className="text-red-500">{signUpError}</p>}
                        <input className="btn btn-outline w-full mt-5" value="Sign Up" type="submit" />
                        <label className="label">
                            <span className="label-text">Already have an account? <Link className='text-primary' to='/login'>Login</Link></span>
                        </label>
                        <div className='divider'></div>
                        <p>This will be buyer account</p>
                        <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;