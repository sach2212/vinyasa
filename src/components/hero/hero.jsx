import React from "react";
import img1 from "/images/hone1.jpg";
import img2 from "/images/home2.jpg";
import img3 from "/images/home3.jpg";

// import Swiper from 'swiper/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, A11y } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade ]}
        spaceBetween={50}
        effect={"fade"}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
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
          <div className="content">
            <h1>Welcome to our store!</h1>
          </div>

          <img src={img2} alt="" className="myimg" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          {" "}
          <div className="content">
            <h1>Welcome to hotel!</h1>
          </div>
          <img src={img1} alt="" className="myimg" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          {" "}
          <div className="content">
            <h1>Welcome to our store!</h1>
          </div>
          <img src={img1} alt="" className="myimg" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          {" "}
          <div className="content">
            <h1>Welcome to hotel!</h1>
          </div>
          <img src={img1} alt="" className="myimg" />
        </SwiperSlide>
     
      </Swiper>

<div className="bookingcont">
      <div className="booking">
        <form action="">

          <input
            type="date"
            id="arrivalDate"
            name="checkin"
            placeholder="checkin"
            required
          />

    
          <input type="date" required placeholder="sahin" />

          <select name="adult" id="no">
            <option value="1">adult</option>
            <option value="1">1</option>
            <option value="1">2</option>
          </select>

          <select name="rooms" id="no">
            <option value="1">rooms</option>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
          </select>
            
          {/* <button className="btn">check now</button> */}
          <a href="" className="buttons">check now</a>
        </form>
      </div>

      </div>


    </div>

  );
};

export default Hero;
