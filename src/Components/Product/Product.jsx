import React from 'react'
import Image from "../../assets/1.jpg"
import Buttons from '../utils/Buttons/Buttons'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const Product = () => {
    const swiper = useSwiper();
    return (
        <div className="ThirdDiv bg-[#FFF2DB] px-2 py-2 md:py-20 lg:py-24 lg:px-14 ">
            <div className="TopSection">
                <h1 className='mb-4 text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold text-center'>Quality Building Materials, Plumbing, Hardware, And Electrical Supplies</h1>

                <h5 className='mb-5 font-light text-center lg:px-[16rem] text-xs sm:text-base md:text-xl'>Browse Our Wide Selection Of Products At Wholesale Pricesto Find Everything You Need For Your Construction Projects.</h5>

            </div>

            <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
            <div className="CourselDiv">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                // modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                // spaceBetween={50}
                // slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                // // effect={"cube"}
                // cubeEffect={{
                //     shadow: true,
                //     slideShadows: true,
                //     shadowOffset: 20,
                //     shadowScale: 0.94,
                // }}
                >
                    {/* {slides.map((slide) => ( */}
                    <SwiperSlide >
                        <img src={Image} alt={'This is a'} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={Image} alt={'This is a'} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={Image} alt={'This is a'} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={Image} alt={'This is a'} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={Image} alt={'This is a'} />
                    </SwiperSlide>
                    {/* ))} */}
                </Swiper>
            </div>
            {/* <div className='flex justify-center'>
                <Buttons marginTop={"0.5rem"} color={"#ffff"} bgColor={"#01253D"} text={"All Products"} borderRadius={"15px"} />
            </div> */}
        </div>
    )
}

export default Product