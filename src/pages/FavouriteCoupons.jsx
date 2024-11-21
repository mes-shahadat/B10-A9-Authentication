import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../utils/MainProvider";
import { IoMdCloseCircleOutline } from "react-icons/io";

function FavouriteCoupons() {
    const { favourites, setFavourites, coupons } = useContext(AuthContext);
    const [data, setData] = useState([]);

    const handleClick = (id) => {
        
        const updatedFavourites = favourites.filter(item => item !== id);
        setFavourites(updatedFavourites);
    };

    useEffect(() => {
        
        const updatedData = favourites.map(item => coupons.find(coupon => coupon.id === item)).filter(Boolean);
        setData(updatedData);
    }, [favourites, coupons]); 

    return (
        <section className="w-11/12 mx-auto my-20">
            <p className="text-3xl text-white font-bold text-center mb-5">Favourite Coupons:</p>

            <div className="flex flex-wrap gap-6 justify-center">
                {data.map(item => (
                    <div key={item.id} className="relative shadow-sm shadow-gray-600">
                        <img className="w-32 h-32 rounded-lg" src={item.brand_logo} alt="" />
                        <div className="absolute top-0 z-10 bg-black/50 w-32 h-32 rounded-lg flex justify-center items-center">
                            <p className="text-white font-bold">{item.coupon_code}</p>
                        </div>

                        <button className="text-3xl text-white absolute -top-3 -right-3 z-20" onClick={() => handleClick(item.id)}>
                            <IoMdCloseCircleOutline />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FavouriteCoupons;