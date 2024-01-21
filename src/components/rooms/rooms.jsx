import React from "react";
import "./rooms.css";
import room1 from "/images/home2.jpg";
 

const Rooms = () => {
  return (
    <div className="rooms">
     
      <h1 className="heading">rooms & suits</h1>
      <div className="rooms_cont">

        <div className="cont1">
          <img src={room1} alt="" />
          <h2>dining</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            explicabo?
          </p>

          <a href="" className="discover">
            discover More <span>➡</span>
          </a>
        </div>

        <div className="cont1">
            
          <img src={room1} alt="" />
          <h2>hospitality</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            explicabo?
          </p>
          <a href="" className="discover">
            discover More <span>➡</span>
          </a>
        </div>

        <div className="cont1">
          <img src={room1} alt="" />
          <h2>luxuary rooms</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            explicabo?
          </p>
          <a href="" className="discover">
            discover More <span>➡</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
