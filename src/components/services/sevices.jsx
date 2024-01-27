import React from "react";
import "./../page/aboutpage.css";
import outer from "/images/outer.jpg";
import { IoWifiOutline } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";

import { IoPeopleSharp } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";

const Sevices = () => {
  return (
    <div>
      <div className="services">
        <h1 className="heading"> our services</h1>
        <div className="service-card">


        <div className="serv_icons">
            <IoBagCheckOutline className="icon" />

            <h3> checkin / checkout</h3>
            <p>
              why we offer
              flexible check-in and check-out timings which is 12 pm - 11am. 
            </p>
          </div>


          <div className="serv_icons">
            <FaCarAlt className=" icon" />
            <h3> free parking</h3>
            <p>
              Upon arrival at our hotel near Bhayandar station, you'll find a
              dedicated parking area where you can safely park your vehicle
           
            </p>
          </div>

          <div className="serv_icons">
            <IoWifiOutline className=" icon" />
            <h3> wifi</h3>
            <p>
              Whether you're in your room, at our lobby, our complimentary Wi-Fi
              ensures that you can stay in touch with loved ones, attend virtual
              meetings
            </p>
          </div>

          <div className="serv_icons">
            <MdOutlineRestaurant className=" icon" />
            <h3> dine</h3>
            <p>
              Whether you're a fan of vegetarian delights or crave the richness
              of non-vegetarian cuisines, our extensive menu caters to all
              preferences.
            </p>
          </div>

          <div className="serv_icons">
            <RiCustomerServiceLine className=" icon" />
            <h3> custom support</h3>
            <p>
              From the moment you reach out to us, whether for inquiries,
              requests, or assistance, our customer support is designed to
              provide a seamless and tailored experience.
            </p>
          </div>

          <div className="serv_icons">
            <IoPeopleSharp className=" icon" />
            <h3> couple friendly</h3>
            <p>
              we understand the importance of creating cherished moments for
              couples. Our hotel is designed to be a haven for romance.
            </p>
          </div>

       
        </div>

        <a href="tel:+919699691949" className="buttons">
          {" "}
          call now
        </a>
      </div>
    </div>
  );
};

export default Sevices;
