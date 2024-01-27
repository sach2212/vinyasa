import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome_cont">
        <div className="maincont">
          <span className="heading">welcome to</span>
          <h1>vinyasa residency</h1>
          <p>
            Welcome To Vinyasa Residency, Your Heaven Of Comfort In Mumbai Near
            Bhayandar Station. Our Strategically Located Hotel Offers The
            Convenience Of Easy Access And A Dedicated Parking Area, Ensuring
            Your Stay Is Stress-Free From The Moment You Arrive. 
            <br />
            <br />
            Indulge In The
            Luxury Of Affordability At Vinyasa Residency, Where We Take Pride In
            Providing Top-Notch Services Without Breaking The Pocket. Our
            Competitive Pricing Sets Us Apart From The Rest, Making Us The
            Preferred Choice For Budget-Conscious Travelers.
          </p>

          <a href="" className="buttons">
            check now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
