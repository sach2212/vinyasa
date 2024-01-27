 import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay  } from "swiper/modules";
import "swiper/css/bundle";
// EffectCoverflow,
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import airport from "/images/aiirport.webp";
import beach1 from "/images/beach1.webp";
import pagoda from "/images/pagoda.webp";
import nall from "/images/nall.webp";
import cave from "/images/cave.webp";
import resort from "/images/resort.webp";



import "./stay.css";
function Stay() {
  return (
    <div className="stay">
      <h2   >tourist attractions</h2>
 

<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
         autoplay={{
              delay: 1700,
              disableOnInteraction: false,
            }}
            // speed={600}
          
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="SwiperSlide_tour">
        <h6  className='h6'> vipasana pagoda <br /> <span>17 km away</span>  </h6>
        <img src={pagoda} alt="" />
        <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide_tour">
        <h6  className='h6' > manori beach <br /> <span> 18 km away </span> </h6>
        <img src={beach1}   alt="" />
        <div className="overlay"></div>
        </SwiperSlide>

        <SwiperSlide className="SwiperSlide_tour">
        <h6  className='h6'>  kanheri caves <br /> <span>16 km away</span> </h6>
        <img src={cave}   alt="" />
        <div className="overlay"></div>
        </SwiperSlide>

        <SwiperSlide className="SwiperSlide_tour"> 
        <h6  className='h6'>  WATER KINGDOM
      <br /> <span>15 km away</span>
 </h6>
        <img src={resort}  alt="" />
        <div className="overlay"></div>
        </SwiperSlide>
 
        <SwiperSlide className="SwiperSlide_tour">
        <h6 className='h6' > maxus mall <br />  <span> 2.5 km away</span></h6>
        <img src={nall}    alt="" />
        <div className="overlay"></div>
        
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide_tour"> 
        <h6  className='h6'> mumbai airport <br /> <span>40 km away</span> </h6>

        <img src={airport}  alt="" />
        <div className="overlay"></div>
        </SwiperSlide>

    

    
      
      </Swiper>
 
     <a href="" className="buttons"> check now</a>

    </div>
  );
}

export default Stay;
