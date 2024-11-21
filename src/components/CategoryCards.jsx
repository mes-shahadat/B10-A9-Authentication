import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function CategoryCards() {

    const data = useLoaderData();
    return <div className="">

        <Swiper
            className="mySwiper swiper-v h-96"
            spaceBetween={50}
            pagination={{
                clickable: true,
            }}
            direction={'vertical'}
            modules={[Pagination]}
        >
            {

                data.map(
                    item => <SwiperSlide key={item._id}>

                        <div className="-mt-4">
                            <h2 className="text-xl text-black font-bold my-4 text-center">{item.brand_name}</h2>
                            <Swiper
                                className="mySwiper2 swiper-h"
                                slidesPerView={1}
                                spaceBetween={5}
                                loop={true}
                                breakpoints={{
                                    500: {
                                        slidesPerView: 2,
                                    },
                                    900: {
                                        slidesPerView: 3,
                                    },
                                    1100: {
                                        slidesPerView: 4,
                                    },
                                    1550: {
                                        slidesPerView: 6,
                                    },
                                    2100: {
                                        slidesPerView: 8,
                                    },
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                            >
                                {
                                    item.coupons.map(
                                        coupon => <SwiperSlide key={coupon.coupon_code}>
                                            <div className="w-48 p-4 text-center bg-white rounded-lg flex flex-col gap-3 justify-between shadow-sm">
                                                <img className="mx-auto rounded-lg border" src={item.brand_logo} alt="" />
                                                <p className="text-sm">{coupon.description}</p>
                                                <div className="relative">
                                                <p className="p-2 border border-dotted border-[#3a6ea5] bg-[#f4fffb] rounded-lg text-right font-bold">{coupon.coupon_code}</p>
                                                <Link className="px-[18px] py-[9px] bg-[#004e98] text-white font-semibold rounded-lg absolute block top-0" to={`/brand/${item.brand_name}`} state={item}>Show Coupons</Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>

                        </div>

                    </SwiperSlide>
                )
            }
        </Swiper>


    </div>
}

export default CategoryCards;