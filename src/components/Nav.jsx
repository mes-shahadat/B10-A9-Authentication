import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo small.png'
import { RiHome6Line } from "react-icons/ri";
import { TbBrandAppgallery } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { RiUserAddLine } from "react-icons/ri";
import { RiUserSharedLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TbShoppingBagHeart } from "react-icons/tb";
import userImg from '../assets/user_icon.png'
import { useContext } from 'react';
import { AuthContext } from '../utils/MainProvider';

function Nav() {

    const { menu, handleClick, user, logOut } = useContext(AuthContext);
    const { pathname } = useLocation();

    const links = <>
        <li className='items-center justify-center'>
            <NavLink to='/' className="px-6 py-3 rounded-full">
                <RiHome6Line className='text-3xl' />
                <span className='font-bold'>Home</span>
            </NavLink>
        </li>
        <li className='items-center justify-center'>
            <NavLink to='/brands' className="px-6 py-3 rounded-full">
                <TbBrandAppgallery className='text-3xl' />
                <span className='font-bold'>Brands</span>
            </NavLink>
        </li>
        {
            user ? <li className='items-center justify-center'>
                <NavLink to='/my_profile' className="px-6 py-[15px] rounded-full">
                    <ImProfile className='text-2xl' />
                    <span className='font-bold'>My-profile</span>
                </NavLink>
            </li> : null
        }
        <li className='items-center justify-center'>
            <NavLink to='/about_dev' className='px-6 py-3 rounded-full'>
                <MdOutlineMedicalInformation className='text-3xl' />
                <span className='font-bold'>About dev</span>
            </NavLink>
        </li>
    </>

    return (
        <>
            <div className="navbar bg-[#ebebeb]/90 backdrop-blur-sm fixed top-0 z-50">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 items-start p-4">
                            {links}
                        </ul>
                    </div>
                    <NavLink to='/'>
                        <img className='w-28 h-16 object-cover scale-125' src={logo} alt="" />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <a className={`${menu ? "active" : ""}text-white inline-flex items-center justify-center gap-2 rounded-full cursor-pointer btn-ghost`}
                            onClick={
                                (e) => {
                                    handleClick(true);
                                    e.stopPropagation();
                                }
                            }>
                            <img className='h-12 border border-[#c0c0c0] rounded-full overflow-hidden' src={user.photoURL || userImg} alt="" />
                            <span className='span font-bold'>You</span>
                        </a> : <a className={`${menu ? "active" : ""} px-6 py-3 text-white inline-flex items-center justify-center gap-2 rounded-full cursor-pointer btn-ghost`}
                            onClick={
                                (e) => {
                                    handleClick(true);
                                    e.stopPropagation();
                                }
                            }>
                            <FaRegUser className='text-2xl' />
                            <span className='span font-bold'>You</span>
                        </a>
                    }

                </div>


                {
                    menu && user ? <div className='absolute max-w-96 top-[72px] right-0 md:right-2 flex flex-col bg-white rounded-lg shadow-sm' onClick={e => e.stopPropagation()}>
                        <div className=' flex items-center gap-3 p-3'>
                            <div className='h-28 rounded-full overflow-hidden border-2 border-[#ebebeb]'>
                                <img className=' h-full w-full object-cover' src={user.photoURL || userImg} alt="" />
                            </div>
                            <div className='space-y-2 w-1/2 text-gray-700'>
                                <h2 className='font-bold'>{user.displayName || "you"}</h2>
                                <small className='text-xs'>{user.email}</small>
                                <div className='flex items-center gap-2'>
                                    <Link to="/my_profile" className='text-xl bg-[#ebebeb] rounded-full p-3' title='update profile'>
                                        <FaRegPenToSquare />
                                    </Link>
                                    <Link to="/my_coupons" className='text-2xl bg-[#ebebeb] rounded-full p-2' title='my favourites'>
                                        <TbShoppingBagHeart />
                                    </Link>
                                    <Link to="/" className='text-2xl bg-[#ebebeb] rounded-full p-2' title='logout' onClick={logOut}>
                                        <IoLogOutOutline />
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div> : menu && !user ? <div className='absolute max-w-80 top-[72px] right-0 md:right-2 flex flex-col bg-white rounded-lg shadow-sm' onClick={e => e.stopPropagation()}>
                        <div className=' flex items-center gap-2 p-3'>
                            <div className=' px-6 py-3 bg-[#3a6ea5] h-20 rounded-lg text-[#d7dde4]'>
                                <LuShoppingBag className='text-5xl' />
                            </div>
                            <div className='space-y-2'>
                                <h2 className='font-bold'>Welcome</h2>
                                <p className='text-xs font-semibold'>Earn extra cashback on top of other discounts on your shopping via DiscountCoupon</p>
                            </div>
                        </div>

                        <hr className='w-full mt-2 mb-4' />

                        <div className='px-3 pb-3 flex gap-5'>
                            <Link className='inline-flex items-center gap-2 font-bold  px-6 py-2 rounded-lg border' to='/register'><RiUserAddLine className='text-3xl' /> Sign up</Link>
                            <Link className='inline-flex items-center gap-2 font-bold  px-6 py-2 rounded-lg bg-[#004e98] text-white border border-[#004e98]' to='/login'><RiUserSharedLine className='text-3xl' /> Login</Link>
                        </div>
                    </div> : null
                }

            </div>

            {
                pathname === '/' ? <>
                    {
                        user ? <p className='pt-24 pb-4 text-center text-2xl text-white font-semibold bg-[#3b3b3b]'>Welcome back, <span className='font-bold'>{user.displayName || "you"}</span></p> : <p className='pt-24 pb-4 text-center text-2xl text-white font-semibold'>Welcome to, <span className='font-bold'>Discount PRO</span></p>
                    }
                </> : <p className='pt-20 bg-[#3b3b3b]'></p>
            }
        </>
    )
}

export default Nav;