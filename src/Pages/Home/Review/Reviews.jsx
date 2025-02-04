import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@mui/material";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

// import Rating from 'react-rating';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0) // Initial value
    useEffect(() => {
        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-20'>
            <SectionTitle heading={"Testimonials"} subHeading={"---What Our Clients Say---"}>

            </SectionTitle>

            <Swiper

                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div classname=' m-24'>
                            <Rating
                                style={{ maxWidth: 200 }}
                                value={review.rating}
                               
                            />
                            <p>{review.details}</p>
                            <p className='text-2xl text-yellow-500'>{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Reviews;