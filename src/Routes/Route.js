import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Blog from "../Pages/BlogPage/Blog";
import Category from "../Pages/CategoryPage/Category";
import AddAProduct from "../Pages/DashboardPage/ComponentsOfDashboardPage/AddAProduct";
import AllBuyers from "../Pages/DashboardPage/ComponentsOfDashboardPage/AllBuyers";
import AllSellers from "../Pages/DashboardPage/ComponentsOfDashboardPage/AllSellers";
import MyOrders from "../Pages/DashboardPage/ComponentsOfDashboardPage/MyOrders";
import MyProducts from "../Pages/DashboardPage/ComponentsOfDashboardPage/MyProducts";
import ReportedItems from "../Pages/DashboardPage/ComponentsOfDashboardPage/ReportedItems";
import Dashboard from "../Pages/DashboardPage/Dashboard";
import Home from "../Pages/HomePage/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/my-products',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/add-a-product',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/reported-items',
                element: <ReportedItems></ReportedItems>
            }
        ]
    }
])
export default router;