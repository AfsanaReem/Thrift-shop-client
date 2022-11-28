import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    const menu = <React.Fragment>
        <li><a href='/'>Home</a></li>
        <li><a href='/dashboard'>Dashboard</a></li>
        <li><a href='/category'>Category</a></li>
        <li><a href='/blog'>Blog</a></li>
        {user?.uid ?
            <>
                <li><a onClick={handleLogOut} href='/'>Log Out</a></li>
            </>
            :
            <li><a href='/login'>Login</a></li>}

    </React.Fragment>

    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">Thrift Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden btn btn-outline">Sidebar</label>
            </div>
        </div>
    );
};

export default Navbar;