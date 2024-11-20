import { Link, useLoaderData } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

function Brands() {

    const data = useLoaderData();
    const [brands, setBrands] = useState(data);

    const handleChange = (e) => {

        let arr = data.filter(
            item => item.brand_name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setBrands(arr)
    }

    return <section className="bg-[#4bab7e] py-20">
        <div className="w-11/12 mx-auto">
            <p className="text-3xl text-white font-bold text-center mb-5">Explore All Brands & Coupons</p>

            <div className="flex items-center justify-center my-10">
                <input className="px-4 py-2 h-16 w-96 rounded-tl-lg rounded-bl-lg focus:outline-none" type="text" placeholder='Enter a brand name' onChange={e => handleChange(e)} />
                <button className="bg-[#004e98] p-4 inline-block rounded-tr-lg rounded-br-lg border border-[#004e98]">
                    <IoMdSearch className="text-3xl text-white" />
                </button>
            </div>

            <div className="space-y-4 w-max mx-auto">
                {
                    brands.map(
                        item => <div className="flex max-sm:flex-col gap-4 bg-white p-4 rounded-lg relative" key={item._id}>
                            <div className="relative">
                                <img className="max-w-64 md:max-w-48 h-64 md:h-48 rounded-lg border mx-auto" src={item.brand_logo} alt="" />
                                <Link className="hidden md:block absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#004e98] text-white text-sm px-4 py-2 font-bold whitespace-nowrap rounded-lg" to={`/brand/${item.brand_name}`} state={item}>View Coupons</Link>
                            </div>

                            <div className="text-gray-700 space-y-3 ">
                                <p className="uppercase font-bold md:text-xl text-gray-900">
                                    {item.brand_name}
                                </p>
                                
                                <p className="max-w-[30ch] md:max-w-[55ch] font-semibold">{item.description}</p>
                                {
                                    item.isSaleOn && <p className="font-bold text-red-900 text-end pt-10 absolute right-5 bottom-3 animate__animated animate__bounce animate__infinite">SALE IS ON</p>
                                }
                                <p className="flex items-center gap-2 font-semibold text-lg">
                                    {item.rating}
                                    <span className="">
                                    <ReactStars
                                        count={5}
                                        value={item.rating}
                                        isHalf={true}
                                        size={18}
                                        activeColor="#ffd700"
                                    />
                                    </span>
                                </p>

                                <Link className="bg-[#004e98] text-white text-sm px-4 py-2 font-bold whitespace-nowrap rounded-lg inline-block md:hidden" to={`/brand/${item.brand_name}`} state={item}>View Coupons</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </section>
}

export default Brands;