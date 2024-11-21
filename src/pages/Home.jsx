import { MdOutlineContentCopy, MdClose, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { LuCopyCheck } from "react-icons/lu";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerCard from '../components/BannerCard';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../utils/MainProvider";
import { toast } from "react-toastify";

function Home() {

    const { favourites, setFavourites } = useContext(AuthContext);
    const { coupons, setCoupons } = useContext(AuthContext);

    const data = useLoaderData();
    const [couponCode, setCouponCode] = useState([])

    const [categories, setCategories] = useState([])
    const [isCopied, setIsCopied] = useState(false);
    const dialogRef = useRef()

    const showDialog = useCallback(
        (code) => {
            setCouponCode([...couponCode, ...code])
            dialogRef.current.showModal();
        }, []
    )

    const closeDialog = () => {
        dialogRef.current.close();
    }

    const handleCopy = (text, result) => {
        if (result) {
            navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
        } else {
            toast.error('Failed to copy text. Please try again.', {
                position: "bottom-right"
            })
        }
    };

    useEffect(
        () => {
            let arr = [];

            data.forEach(
                item => {

                    for (let coupon of item.coupons) {
                        if (coupon.cupon_type === "Percentage Discount") {
                            coupon.id = item._id
                            coupon.brand_name = item.brand_name
                            coupon.brand_logo = item.brand_logo
                            coupon.shop_Link = item.shop_Link
                            arr.push(coupon);
                        }
                    }
                }
            )

            const arrayUniqueByKey = [...new Map(arr.map(item =>
                [item['brand_name'], item])).values()];

            setCoupons(arrayUniqueByKey);
        }, []
    )

    useEffect(
        () => {
            fetch('/categories.json')
                .then(res => res.json())
                .then(data => setCategories(data))
                .catch(() => toast.error("Error while fetching categories", {
                    position: "bottom-right"
                }))
        }, []
    )

    return <>
        <dialog className="bg-white text-center space-y-4 p-8 rounded-lg z-10 backdrop:bg-black/70" ref={dialogRef}>
            <MdClose className="text-3xl border border-gray-300 rounded-full ml-auto absolute top-1 right-1 cursor-pointer" onClick={closeDialog} />
            <p className="font-semibold">Coupon code</p>
            <div className="flex items-center p-2 border border-dotted border-[#8ce2c5] bg-[#f4fffb] rounded-lg">
                <p className="min-w-44 sm:min-w-56 font-bold">{couponCode[0]}</p>
                <span>
                    <CopyToClipboard text={couponCode[0]} onCopy={handleCopy}>
                        {
                            isCopied ? <LuCopyCheck className="text-3xl cursor-pointer" /> : <MdOutlineContentCopy className="text-3xl cursor-pointer" />
                        }
                    </CopyToClipboard>
                </span>
            </div>
            <Link className="text-[#004e98] font-semibold inline-flex items-center gap-2" to={couponCode[1]} target="_blank">Visit site <FiExternalLink /></Link>

            <hr />

            <div className="flex justify-between items-end">
                <p className="font-semibold">Ends: {couponCode[2]}</p>
                <button className=" font-semibold underline">
                    {
                        favourites.includes(couponCode[3]) ? <MdFavorite className="text-2xl" onClick={() => setFavourites(favourites.filter(item => item !== couponCode[3]))} /> : <MdFavoriteBorder className="text-2xl" onClick={() => setFavourites([...favourites, couponCode[3]])} />
                    }
                </button>
            </div>
        </dialog>

        <section className="w-11/12 mx-auto my-14">

        <h2 className="text-white text-2xl font-bold text-center uppercase my-10">New Coupons</h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2900,
                    disableOnInteraction: false,
                  }}
                breakpoints={{
                    1550: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    2300: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    coupons.map(
                        item => <SwiperSlide key={item.id}>
                            <BannerCard showDialog={showDialog} data={item} />
                        </SwiperSlide>
                    )
                }

            </Swiper>

        </section>

        <section className=" bg-[#edf1f8]">

        <h2 className="text-2xl font-bold text-center pt-14 mb-8 uppercase">Top Brands That Customers Love</h2>
        <p className="max-w-[70ch] mx-auto text-center font-semibold mb-10 text-gray-800 px-4">Discover the top brands that customers trust and love! From high-quality products to exceptional services, these brands stand out for their commitment to excellence.</p>

            <div className="w-11/12 mx-auto px-4 pb-20">

                <Marquee
                    autoFill={true}
                    delay='1'
                    pauseOnHover={true}
                >

                    {
                        data.map(
                            item => <Link key={item._id} to={`/brand/${item.brand_name}`} state={item}>
                                <img className="w-28 md:w-36 md:h-36 object-cover rounded-lg m-1" src={item.brand_logo} alt="" />
                            </Link>
                        )
                    }

                </Marquee>

                <Marquee
                    autoFill={true}
                    delay='1'
                    pauseOnHover={true}
                >

                    {
                        data.reverse().map(
                            item => <Link key={item._id} to={`/brand/${item.brand_name}`} state={item}>
                                <img className="w-28 md:w-36 md:h-36 object-cover rounded-lg m-1" src={item.brand_logo} alt="" />
                            </Link>
                        )
                    }

                </Marquee>
            </div>

        </section>

        <section className="w-11/12 mx-auto ">
            <h2 className="pt-16 text-white text-2xl font-bold mb-4 uppercase">Brands on Sell</h2>

            <div className="flex flex-wrap gap-4 justify-center">

                {
                    data.map(
                        item => {
                            if (item.isSaleOn) {
                                return <Link className="relative" to={`/brand/${item.brand_name}`} state={item} key={item._id}>

                                    <div className="bg-white w-max rounded-lg overflow-hidden">
                                        <img className="w-36 h-36 object-cover mx-auto" src={item.brand_logo} alt="" />
                                        <div className="p-4 space-y-2 text-center">
                                            <h3 className="font-bold">{item.brand_name}</h3>
                                            <p className="font-semibold text-sm">Coupons: {item.coupons.length}</p>
                                            <span className="px-2 py-1 bg-red-500 text-white rounded-lg  block text-xs font-semibold">{item.category}</span>
                                        </div>
                                    </div>

                                    <div className="absolute top-0 bg-[#ebebeb] w-full h-full flex justify-center items-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
                                        <p className="font-bold">{item.coupons.length} offers</p>
                                    </div>
                                </Link>
                            }
                        }
                    )
                }
            </div>


        </section>

        <section className="bg-[#edf1f8] mt-10 pb-24">

            <div className="w-11/12 mx-auto bg-[#edf1f8]">
                <h2 className="pt-16 text-black text-2xl font-bold mb-10 uppercase">Popular Categories</h2>

                <div className="flex max-sm:flex-col gap-4">

                    <div className="w-full md:w-[30%] lg:w-[20%] xl:w-[15%] category flex flex-col gap-2 h-max bg-white p-4 rounded-lg shadow-sm">
                        {
                            categories.map(
                                (item, i) => <NavLink className="font-semibold border px-4 py-2 rounded-lg" key={i} to={`/categories/${item}`}>{item}</NavLink>
                            )
                        }
                    </div>

                    <div className="sm:w-[78%] md:w-[70%] lg:w-[80%] xl:w-[85%]">
                        <Outlet />
                    </div>

                </div>
            </div>

        </section>

        <section className=" mt-10 mb-20">

            <div className="w-11/12 mx-auto">
                <h2 className="text-3xl font-bold my-10 text-center text-white">About Discount Pro</h2>

                <div className="flex flex-wrap gap-4 justify-center">
                    <div className="font-semibold space-y-4 bg-white/90 p-4 rounded-lg">
                        <h3 className="text-6xl font-bold text-[#9869c9]">24k+</h3>
                        <p className="max-w-[35ch]"><strong>online brands</strong> spanning various industries, the digital marketplace offers unparalleled opportunities for shoppers</p>
                    </div>

                    <div className="font-semibold space-y-4 bg-white/90 p-4 rounded-lg">
                        <h3 className="text-6xl font-bold text-[#9869c9]">30%</h3>
                        <p className="max-w-[35ch]"><strong>cost reduction</strong> on your favorite products and services!, coupons offer lets you enjoy more while spending less.</p>
                    </div>

                    <div className="font-semibold space-y-4 bg-white/90 p-4 rounded-lg">
                        <h3 className="text-6xl font-bold text-[#9869c9]">9/10</h3>
                        <p className="max-w-[35ch]"><strong>customer satisfaction rate</strong>, our platform has become a trusted destination for users seeking convenience & value.</p>
                    </div>
                </div>
            </div>

        </section>
    </>
}

export default Home;