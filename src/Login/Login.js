import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../hooks/useToken";

const Login = () => {
    //react-hook-form
    const { register, handleSubmit } = useForm();
    //using auth for firebase login signIn
    const { loginUser, googleSignIn } = useContext(AuthContext);
    //navigation to private route from login or sign up page
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    //set error
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    if (token) {
        navigate(from, { replace: true });
    }
    //click handler for login via email and pass
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(data.email)
                toast('Logged In Successfully');
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }
    //click handler for login via google
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                saveUser(user.displayName, user.email, 'Buyer')
                toast('Logged In Successfully');
                navigate(from, { replace: true });
            })
            .catch(error => { setLoginError(error.message) })
    }
    //for saving users
    const saveUser = (name, email, role) => {
        const user = { name, email, role, verified: false }
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoginUserEmail(email)
            })
    }
    return (
        <div className='hero'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h4 className='text-center text-2xl'>Login</h4>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className="input input-bordered" type='email'
                                {...register("email", { required: true })} />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input className="input input-bordered" type='password'
                                {...register("password", {
                                    required: true
                                })} />
                            {loginError && <p className="text-red-500" role="alert">{loginError}</p>}
                            <label className="label">
                                <span className="label-text">Forgot Password?</span>
                            </label>
                        </div>
                        <input className="btn btn-outline w-full mt-5" type="submit" />
                        <label className="label">
                            <span className="label-text">New here? <Link className='text-primary' to='/signup'>Create New Account.</Link></span>
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

export default Login;