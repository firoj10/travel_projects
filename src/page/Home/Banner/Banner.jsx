
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "./../../../assets/travel/Hero_section.png"
import './Banner.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Banner() {

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination, Navigation]}


                className="mySwiper"
            >

                <SwiperSlide data-hash="slide1" className='swiper-slide_img' style={{
                    backgroundImage: `url(${img1 ? img1 : ''})`,
                    objectFit: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)' // Light black background with 30% opacity
                }}>
                    <h1 className='swiper_title'>Your Gateway to Seamless <br /> Travel Experiences</h1>
                    <p className='swiper_content'>Find the Best Deals on Flights and Hotels</p>

                </SwiperSlide>
                <SwiperSlide data-hash="slide1" className='swiper-slide_img' style={{
                    backgroundImage: `url(${img1 ? img1 : ''})`,
                    objectFit: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)' // Light black background with 30% opacity
                }}>                    <h1 className='swiper_title'>Your Gateway to Seamless <br /> Travel Experiences</h1>
                    <p className='swiper_content'>Find the Best Deals on Flights and Hotels</p>

                </SwiperSlide>
                <SwiperSlide data-hash="slide1" className='swiper-slide_img' style={{
                    backgroundImage: `url(${img1 ? img1 : ''})`,
                    objectFit: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)' // Light black background with 30% opacity
                }}>                    <h1 className='swiper_title'>Your Gateway to Seamless <br /> Travel Experiences</h1>
                    <p className='swiper_content'>Find the Best Deals on Flights and Hotels</p>

                </SwiperSlide>


            </Swiper>
        </div>
    );
}
export default Banner;