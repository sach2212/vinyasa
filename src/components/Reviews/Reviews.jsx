import React from "react";
import "./Reviews.css";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";

import { IoStar, IoStarHalfOutline } from "react-icons/io5";

import google from "/images/google (1).png";

const Reviews = () => {
  return (
    <div className="review">
      <h1 className="heading">reviews</h1>
      <div className="rev_cont">
        

        <div className="rev_slider">
          <Swiper
            className="swiper"
            modules={[  Autoplay]}
            spaceBetween={50}
            effect={"fade"}
          
            pagination={{ clickable: true }}
            // autoplay={{
            //     delay: 1500,
            //     disableOnInteraction: false,
            //   }}
            speed={500}
            loop={true}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="SwiperSlide">
            <FaQuoteLeft className="quote" />

              <p>
                As a frequent traveler, I am thrilled to have discovered Vinyasa
                Hotels near Bhayandar Station. The rooms are top-notch, offering
                a luxurious experience at prices that won't burn a hole in your
                pocket. Kudos to the management!"
              </p>

              <h1>ivya thomas!</h1>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
            <FaQuoteLeft className="quote" />
              <p>
                the vinyasa hotel resides near bhayandar staion which makes easy
                to travel to the hotel, loved your services
              </p>
              <h1>Charu Borasi</h1>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
            <FaQuoteLeft className="quote" />
              <p>
                Nice hotel good staff happy Will visit again, best part its a
                budget hotel in mumbai and most affordabe also
              </p>
              <h1>yasar MEMON</h1>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
            <FaQuoteLeft className="quote" />
              <p>
                the food was delicious and the staff were too friendly best
                hotels for couples near station
              </p>
              <h1>Aman Vasistha</h1>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide">
            <FaQuoteLeft className="quote" />
              <p>
                {" "}
                The hotel staff people are very nice Very well taken care of the
                manager also very nice Thank you Hotel Vishana Residency.
              </p>
              <h1> Mukesh Singh</h1>
            </SwiperSlide>
          </Swiper>


        </div>

        <div className="testimonial">
          <h2> hAPPY  <br /> CUSTOMER    </h2>

           
          <div className="rating">
            <h3>4.4</h3>
            <IoStar className="icon" />
            <IoStar className="icon" />
            <IoStar className="icon" />
            <IoStar className="icon" />
            <IoStarHalfOutline className="icon" />
          </div>

          <div className="google">
            <img src={google} alt="" />
            <a href="">review us on google</a>
          </div>
        </div>



      </div>



    </div>
  );
};

export default Reviews;
