import React from "react";
import vinyasa from "/images/outer.jpg";

import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="about_cont">

      <div className="ab_img">
          <img src={vinyasa} alt="" />

          <div className="overlay"></div>
        </div>


        <div className="aboutus">
          <h1 className="heading">our vision</h1>

          <div className="content1">
            <p>
              Welcome to vinyasa residency, where comfort meets affordability in
              the heart of mumbai. Our vision is to redefine budget-friendly
              hospitality by providing a warm and welcoming retreat for both
              couples and families. Nestled conveniently near the station and
              market area,
           
              our hotel is strategically positioned to offer a seamless blend of
              accessibility and leisure.
              <br />
              <br />
               At vinyasa residency, we envision
              creating a haven for travelers seeking a delightful blend of
              budget-friendly accommodation and exceptional hospitality. Our
              commitment lies in fostering a warm and inviting atmosphere,
              ensuring an unforgettable experience for couples and families
              alike.
            </p>
            
       
          </div>
          <a href="" className="buttons">explore</a>
       
        </div>
     
       
      </div>
      
    </div>
  );
};

export default About;
