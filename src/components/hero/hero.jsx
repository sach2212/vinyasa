import React from "react";
import img1 from "/images/hone1.jpg";
import img2 from "/images/home2.jpg";
import img3 from "/images/home3.jpg";
import sun from "/images/sun.jpg";
import bridge from "/images/bridge.jpg";

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
        modules={[Navigation, Autoplay, EffectFade]}
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
          <h1>want to enjoy the comfort in Mumbai ? </h1>
           
          </div>

          <img src={sun} alt="" className="myimg" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          {" "}
          <div className="content">
          <h1>Discover Blissful Retreats at <br />  Vinyasa Residency. </h1>
          </div>
          <img src={bridge} alt="" className="myimg" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          {" "}
          <div className="content">
            <h1>your budget  hotel welcomes you</h1>
            {/* <p>vinyasa residency situates near bhayndar station, mumbai</p> */}
          </div>
          <img src={img1} alt="" className="myimg" />
        </SwiperSlide>
    
      </Swiper>

      <div className="bookingcont">
        <div className="booking">
          <h2 className="heading">book your stay now</h2>
          <form action=""  className="form" >

            <div className="labelblock">
            <label htmlFor="chekin">check-in</label>
            <input
              type="date"
              id="arrivalDate"
              name="checkin"
              placeholder="checkin"
              required
            />

            </div>
            
       <div className="labelblock">
           <label htmlFor=" ">check-out</label>
            <input type="date" required   />
         </div>

          <div className="labelblock">

              <label htmlFor=" ">person</label>
                <select name="adult" id="no">
                  <option value="1">adult</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
            </select>

         </div> 
         
           <div className="labelblock">
                <label htmlFor="chekin">rooms</label>

            <select name="rooms" id="no">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
             <option value="1">4</option>
           </select>

         </div>

 

            {/* <button className="btn">check now</button> */}
            <a href=" https://wa.me/+919699691949 " className="buttons">
              check now
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
