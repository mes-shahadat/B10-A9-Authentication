import { Link } from "react-router-dom";
import logo from "../assets/logo medium.png"
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

function Footer () {

    return (
        <section className="bg-[#3b3b3b] text-white">
            <div className="w-11/12 mx-auto py-10 flex max-sm:flex-col gap-10 justify-evenly md:items-center">

                <div className="w-max">
                    <img className="w-32" src={logo} alt="" />
                    <div className="flex gap-2 justify-center">
                        <Link className="p-1 border border-[#ebebeb] rounded-full" to="https://www.facebook.com/mohammad.sahadat.587/" target="_blank"><CgFacebook /></Link>
                        <Link className="p-1 border border-[#ebebeb] rounded-full" to="https://www.instagram.com/sahadat2173/" target="_blank"><FiInstagram /></Link>
                        <Link className="p-1 border border-[#ebebeb] rounded-full" to="https://x.com/md_yasin_74630" target="_blank"><RiTwitterXLine /></Link>
                        <Link className="p-1 border border-[#ebebeb] rounded-full" to="https://t.me/mohammad_yasin74630" target="_blank"><FaTelegramPlane /></Link>
                    </div>
                </div>

                <div className="flex flex-col space-y-1 text-gray-200">
                    <h2 className="text-xl font-bold text-white">Information</h2>
                    <Link className="text-sm">About us</Link>
                    <Link className="text-sm">Privacy policy</Link>
                    <Link className="text-sm">Disclaimer</Link>
                </div>

                <div className="flex flex-col space-y-1 text-gray-200">
                    <h2 className="text-xl font-bold text-white">Help</h2>
                    <Link className="text-sm">Contact us</Link>
                    <Link className="text-sm">Favourite list</Link>
                    <Link className="text-sm">Faq</Link>
                </div>
            </div>

            <div className="bg-[#2a2a2a]">
                <p className="text-center py-4 text-xs">Copyright © 2024. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer;