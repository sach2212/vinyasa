import React from "react";
import img1 from "/images/hone1.jpg";
import img2 from "/images/home2.jpg";
import img3 from "/images/home3.jpg";
// import img4 from  "/images/hone1.jpg"
// import img5 from  "/images/hone1.jpg"
// import img6 from  "/images/hone1.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "./hero.css";

const Hero = () => {
  return (
   
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="SwiperSlide">
          <div className="content">
            <h1>Welcome to our store!</h1>
          </div>

          <img src={img3} alt="" className="myimg"/>


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
            <h1>Welcome to our store!</h1>
          </div>
          <img src={img1} alt=""  className="myimg"/>
        </SwiperSlide>

        <SwiperSlide className="SwiperSlide">
          {" "}
          <div className="content">
            <h1>Welcome to our store!</h1>
          </div>
          <img src={img1} alt="" className="myimg"  />
        </SwiperSlide>
        ...
      </Swiper>
  
  );
};

export default Hero;
