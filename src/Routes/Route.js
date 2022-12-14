import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Blog from "../Pages/BlogPage/Blog";
import Kids from "../Pages/CategoryPage/Kids";
import Mens from "../Pages/CategoryPage/Mens";
import Womens from "../Pages/CategoryPage/Womens";
import AddAProduct from "../Pages/DashboardPage/ComponentsOfDashboardPage/AddAProduct";
import AllBuyers from "../Pages/DashboardPage/ComponentsOfDashboardPage/AllBuyers";
import AllSellers from "../Pages/DashboardPage/ComponentsOfDashboardPage/AllSellers";
import MyOrders from "../Pages/DashboardPage/ComponentsOfDashboardPage/MyOrders";
import MyProducts from "../Pages/DashboardPage/ComponentsOfDashboardPage/MyProducts";
import Payment from "../Pages/DashboardPage/ComponentsOfDashboardPage/Payment";
import ReportedItems from "../Pages/DashboardPage/ComponentsOfDashboardPage/ReportedItems";
import Categories from "../Pages/HomePage/ComponentsOfHomePage/Categories";
import Home from "../Pages/HomePage/Home";
import DisplayError from "../SharedComponents/DisplayError";
import Navbar from "../SharedComponents/Navbar/Navbar";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                element: <Categories></Categories>
            },
            {
                path: '/mens',
                element: <PrivateRoute><Mens></Mens></PrivateRoute>
            },
            {
                path: '/womens',
                element: <PrivateRoute><Womens></Womens></PrivateRoute>
            },
            {
                path: '/kids',
                element: <PrivateRoute><Kids></Kids></PrivateRoute>
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
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/my-orders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/add-a-product',
                element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reported-items',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://thrift-shop-server.vercel.app/booking/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div>
            <Navbar></Navbar>
            <img className="mx-auto" alt='Page not found' src="page404.jpg"></img>
        </div>
    }
])
export default router;