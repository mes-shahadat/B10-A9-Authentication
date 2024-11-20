import { memo } from "react";

function BannerCard({showDialog, data}) {

    return <div className="flex max-sm:flex-col items-center gap-4 bg-white p-4 w-max rounded-lg mx-auto my-4">

        <img className="max-w-64 h-64 object-cover rounded-lg" src={data.brand_logo} alt="" />

        <div className="max-w-[45ch] space-y-4">
            <p className="text-4xl font-extrabold text-center mb-16">Save {Math.floor(Math.random() * (30 - 1 + 1) + 1)}% off</p>
            <p className="font-semibold text-2xl">{data.brand_name}</p>
            <p className="font-semibold max-sm:w-64">{data.description}</p>
            <button className="font-semibold border-b-2" onClick={()=>showDialog([data.coupon_code,data.shop_Link, data.expiry_date, data.id])}>REVEAL CODE</button>
        </div>
    </div>
}

export default memo(BannerCard)