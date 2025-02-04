import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProviders';
import { BsCart4 } from "react-icons/bs";
import UseCart from '../../../../hooks/UseCart';
const NavBar = () => {

    const [cart] = UseCart();

    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('Logged Out successfully');
            })
    }

    const options = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>

        <li><Link to='/signup'>Sign Up</Link></li>
        
    <li>
    <Link to='/dashboard/cart'>
        <button className=" flex items-center">
         <BsCart4 className='text-3xl text-cyan-900 mr-4' />
            <div className="badge badge-secondary">{cart.length}</div>
        </button>
        </Link>
    </li>



        <li><Link to='/order/:category'>Order Food</Link></li>

        {
            user ? <li><Link onClick={handleLogout}>Logout</Link></li> : <li><Link to='/login'>Login</Link></li>
        }


    </>

    return (
        <div className="navbar fixed bg-black opacity-30 z-10 max-w-[1216px]  text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 text-white font-bo w-52 p-2 shadow">
                        {options}
                    </ul>
                </div>
                <a className=" text-xl">Bistro Boss <br /> <span className='tracking-widest'>RESTAURANT</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {options}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;