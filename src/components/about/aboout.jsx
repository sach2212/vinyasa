import React from "react";
import vinyasa from "/images/outer.jpg";
import { ImHappy } from "react-icons/im";
import { FaHotel } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";
import { useSpring, animated } from '@react-spring/web'


   function Number({n}){
    
      const {number}= useSpring({
        from:{number:0},
        number:n,
        delay: 1500,
        config:{mass:1, tension :20, friction:10},
      });
      return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;

   }


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
          {/* <h1 className="heading">our vision</h1> */}

          <div className="content1">

      <h2>our vision</h2>

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
            
            </p>

            <div className="service">

            <div className="services1">
            
                <FaHotel  className="servicons" /> 
                <h3><Number n={20} /> <strong>+</strong> </h3>
                <h6>luxuary rooms</h6>
            </div> 
            
            <div className="services1">
            <GoCodeReview  className="servicons" /> 
            <h3> <Number n={120} /> <strong>+</strong> </h3> 
            <h6>google Reviews</h6>
            </div> 
            
            <div className="services1">
            <ImHappy className="servicons" /> 
            <h3><Number n={250} /> <strong>+</strong> </h3>
            <h6>happy customers</h6>
            </div>

            </div>

 
          </div>
          {/* <a href="" className="buttons">explore</a> */}
        <a href="" className="buttons">explore more
          {/* <span> ➡</span> */}
        </a>
        </div>
     
       
      </div>
      
    </div>
  );
};

export default About;
