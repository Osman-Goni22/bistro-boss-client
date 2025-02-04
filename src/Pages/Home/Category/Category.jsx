import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
       <section>

       <SectionTitle heading={"Order Online"} subHeading={'---From 11:00am to 10:00pm---'}>

       </SectionTitle>

         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl text-center text-white uppercase -mt-16'>SALADS</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className='text-4xl text-center text-white uppercase -mt-16'>PIZZAs</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className='text-4xl text-center text-white uppercase -mt-16'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className='text-4xl text-center text-white uppercase -mt-16'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
             <img src={slide5} alt="" />
             <h3 className='text-4xl text-center text-white uppercase -mt-16'>SALADS</h3>
        </SwiperSlide>

      </Swiper>
       </section>
    );
};

export default Category;