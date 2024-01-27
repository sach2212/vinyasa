import React from "react";
import "./rooms.css";
import room1 from "/images/home2.jpg";
import hosp from "/images/hopitality.jpg";
import dine5 from "/images/dine5.jpg";

const Rooms = () => {
  return (
    <div className="rooms">
      <h1 className="heading">rooms & suits</h1>
      <div className="rooms_cont">
        <div className="cont1">
          <img src={dine5} alt="" />
          <h2>dining</h2>
          <p>
          Our hotel is proud to offer spacious  rooms
             to ensure
            that your stay with us is both relaxing and enjoyable
          </p>

          <a href="/gallery" className="discover">
            discover More <span>➡</span>
          </a>
        </div>

        <div className="cont1">
          <img src={hosp} alt="" />
          <h2>hospitality</h2>
          <p>
          Our dedicated team is here to provide you with warm and personalized service from the moment you arrive.
          </p>
          <a href="/gallery" className="discover">
            discover More <span>➡</span>
          </a>
        </div>

        <div className="cont1">
          <img src={room1} alt="" />
          <h2>luxuary rooms</h2>
          <p>
            Enjoy the convenience of room service without compromising on the
            quality and taste of our delectable offerings.
          </p>
          <a href="/gallery" className="discover">
            discover More <span>➡</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
