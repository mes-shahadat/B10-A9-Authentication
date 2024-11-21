import { Link, useLocation, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { CopyToClipboard } from 'react-copy-to-clipboard'; 
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";

function Brand() {

    const { state } = useLocation();
    const [stateData, setStateData] = useState(state)
    const {id} = useParams()

    useEffect(
        ()=>{

            if (!state) {
                fetch('/fake_coupon_data.json')
                .then( res => res.json())
                .then( data => setStateData(data.find(
                    item => item.brand_name === id
                )))
            }
        }, []
    )
    
    return <section className="bg-[#edf1f8]">
        <div className="bg-white">
            <div className="w-11/12 mx-auto">
                <div className="flex max-sm:flex-col justify-center items-center gap-2 p-4">
                    <img className="w-36 h-36 rounded-lg" src={stateData?.brand_logo} alt="" />
                    <div className="space-y-4">
                        <p className="text-4xl font-bold">{stateData?.brand_name} Coupon Codes </p>
                        <span className="text-sm px-4 py-2 bg-[#004e98] text-white rounded-lg font-semibold mr-4">{stateData?.category}</span>
                        <p className="inline-flex items-center gap-2 font-semibold text-xl">
                            {stateData?.rating}
                            <span className="">
                                <ReactStars
                                    count={5}
                                    value={stateData?.rating}
                                    isHalf={true}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <p className="w-11/12 mx-auto font-bold text-xl px-2 py-10">Total coupons ({stateData?.coupons.length})</p>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-2 pb-20">
                {
                    stateData?.coupons.map(
                        (item, i) => <div className="bg-white p-4 rounded-lg max-w-[45ch] font-semibold flex flex-col justify-evenly gap-4 shadow-sm" key={i}>
                            <p>{item.description}</p>
                            <div className="flex flex-wrap gap-2 font-bold text-white text-xs">
                                <span className="bg-red-300 px-3 py-1 rounded-lg">{item.coupon_code}</span>
                                <span className="bg-red-300 px-3 py-1 rounded-lg">{item.cupon_type}</span>
                                <span className="bg-red-300 px-3 py-1 rounded-lg">{item.expiry_date}</span>
                            </div>
                            <p className="text-xs text-red-700">{item.condition}</p>
                            <div className="flex justify-between">
                                <CopyToClipboard text={item.coupon_code}
                                    onCopy={() => toast.success("Coupon code copied !", {
                                        position: "bottom-right"
                                    })}>
                                    <button className="w-[45%] py-2 bg-[#8ce2c5] font-semibold rounded-lg">Copy</button>
                                </CopyToClipboard>
                                <Link className="w-[45%] py-2 bg-[#3a6ea5] text-white font-semibold text-center rounded-lg inline-block" to={stateData?.shop_Link} target="_blank">Use Now</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </section>
}

export default Brand;