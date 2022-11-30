import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => { navigate('/login') })
            .catch(error => console.error(error));
    }
    const error = useRouteError();
    return (
        <div>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <a onClick={handleLogOut} href='/login'>Log Out</a>

        </div>
    );
};

export default DisplayError;