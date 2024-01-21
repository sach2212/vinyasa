import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay  } from "swiper/modules";
import "swiper/css/bundle";

import "swiper/css";
import beach from "/images/beach.jpg";
import mum from "/images/mum.jpg";
import bridge from "/images/bridge.jpg";

import "./stay.css";
function Stay() {
  return (
    <div className="stay">
      <h2  >tourist attractions</h2>

      <div className="stay-cont">
        <p>a few more good reason for you to stay with vinyasa residency </p>
      </div>
  
     <a href="" className="buttons"> explore now</a>

    </div>
  );
}

export default Stay;
