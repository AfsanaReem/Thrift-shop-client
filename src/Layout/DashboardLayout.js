import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Pages/DashboardPage/ComponentsOfDashboardPage/SideBar';
import Navbar from '../SharedComponents/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 md:bg-base-100 text-base-content">
                        <SideBar></SideBar>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;