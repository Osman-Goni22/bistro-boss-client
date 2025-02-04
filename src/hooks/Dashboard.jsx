import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUserFriends, FaUtensils } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAdmin from './useAdmin';
const Dashboard = () => {
    const [isAdmin, refetch] = useAdmin();
    const { user } = useContext(AuthContext)
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className=" p-4">
                    {
                        isAdmin ? <>

                            <li className="flex flex-row items-center justify-between">

                                <NavLink className='flex items-center gap-2 mt-4' >

                                    Admin Home </NavLink>

                            </li>

                            <li className="flex flex-row items-center justify-between">

                                <NavLink className='flex items-center gap-2 mt-4' to='/dashboard/addItems'>
                                    <FaUtensils className=" text-2xl"></FaUtensils>

                                    Add Items </NavLink>
                            </li>


                            <li className="flex flex-row items-center justify-between">

                                <NavLink className='flex items-center gap-2 mt-4' to='/dashboard/manageItems'>
                                    <FaList className=" text-2xl"></FaList>

                                    Manage Items </NavLink>
                            </li>

                            <li className="flex flex-row items-center justify-between">

                                <NavLink className='flex items-center gap-2 mt-4' to='/'>
                                    <FaBook className=" text-2xl"></FaBook>

                                    Manage Bookings </NavLink>
                            </li>

                            <li className="flex flex-row items-center justify-between">

                                <NavLink className='flex items-center gap-2 mt-4' to='/dashboard/users'>

                                    <FaUserFriends className="text-xl" />

                                    All Users </NavLink>
                            </li>

                        </> :
                            <>
                                <li >

                                    <NavLink className='bg-orange-400 flex items-center gap-2 mt-4' to='/dashboard/cart'>
                                        <FaHome className=" text-2xl"></FaHome>

                                        User Home </NavLink>
                                </li>
                                <li >

                                    <NavLink className='flex items-center gap-2 mt-4' to='/dashboard/cart'>
                                        <FaCalendar className=" text-2xl"></FaCalendar>

                                        Reservation </NavLink>
                                </li>

                                <li className="flex">

                                    <NavLink className='flex items-center gap-2 mt-4' to='/dashboard/cart'>
                                        <TiShoppingCart className=" text-4xl"></TiShoppingCart>

                                        My Cart </NavLink>
                                </li>
                                <li className="flex flex-row items-center justify-between">

                                    <NavLink className='flex items-center gap-2 mt-4' to='/dashboard/review'>
                                        <FaAd className=" text-2xl"></FaAd>

                                        Add Review </NavLink>
                                </li>
                                <li className="flex flex-row items-center justify-between">

                                    <NavLink className='flex items-center gap-2 mt-4' to='/dashboard/bookings'>
                                        <FaList className=" text-2xl"></FaList>

                                        My Bookings </NavLink>
                                </li>
                            </>
                    }

                    <hr className="border-b-3  border-white mt-4"/>

                    <li className="flex flex-row items-center justify-between">

                        <NavLink className='flex items-center gap-2 mt-4' to='/dashboard/bookings'>
                            <FaHome className=" text-2xl"></FaHome>

                            Home </NavLink>
                    </li>


                    <li className="flex flex-row items-center justify-between">

                        <NavLink className='flex items-center gap-2 mt-4' to='/dashboard/bookings'>
                            <FaList className=" text-2xl"></FaList>

                            Menu </NavLink>
                    </li>

                    <li className="flex flex-row items-center justify-between">

                        <NavLink className='flex items-center gap-2 mt-4' to='/dashboard/bookings'>
                            <FaEnvelope className=" text-2xl"></FaEnvelope>

                         Contact </NavLink>
                    </li>


                </ul>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;