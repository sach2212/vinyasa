import React from "react";
import "./aboutpage.css";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import outer from "/images/outer.jpg";
import { IoWifiOutline } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";

const Aboutpage = () => {
  return (
    <>
      <Navbar />
      <div className="aboutpage">
        <h1 className="heading">about us</h1>
      </div>

      <div className="abooutpage_cont">
        <span className=" heading"> welcome to</span>
        <h1>vinyasa residency</h1>
        <p>
          Welcome to Vinyasa Residency, your heaven of comfort in mumbai near
          Bhayandar station. Our strategically located hotel offers the
          convenience of easy access and a dedicated parking area, ensuring your
          stay is stress-free from the moment you arrive. Indulge in the luxury
          of affordability at Vinyasa Residency, where we take pride in
          providing top-notch services without breaking the pocket. Our
          competitive pricing sets us apart from the rest, making us the
          preferred choice for budget-conscious travelers.
        </p>{" "}
        <p>
          At Vinyasa Residency, we understand the importance of catering to
          diverse preferences. Our extensive menu includes a delightful
          selection of both vegetarian and non-vegetarian dishes, ensuring
          there's something for every palate. Savor the flavors of our
          thoughtfully crafted meals in the comfort of our cozy dining area.
        </p>{" "}
        <p>
          At Vinyasa Residency, we take pride in the exceptional level of
          friendly support provided by our dedicated hotel staff. Our team is
          committed to ensuring that each guest experiences not only the
          physical comforts of our accommodation but also the warmth and
          attentiveness that define genuine hospitality.
        </p>
        <a href="" className="buttons">
          book now
        </a>
      </div>

      <div className="whyus">
        <div className="whyus_cont">
          <div className="why_cont1">
            <h2 className="">why us</h2>
            <p>
              Vinyasa Residency is synonymous with affordable luxury. Our
              competitive pricing model allows you to enjoy the finest
              hospitality without burning a hole in your pocket. Immerse
              yourself in a world of comfort and style that won't break the
              bank.
              <br />
              <br />
              <span>friendly staff</span> <br /> From the moment you step into
              our welcoming lobby, our staff is ready to assist and make your
              stay as seamless as possible. The front desk, manned by
              knowledgeable and friendly personnel, is available 24/7 to address
              your inquiries, provide local insights, and facilitate a smooth
              check-in process. Our commitment to friendly support starts at the
              very beginning of your stay, ensuring that you feel valued and
              welcomed from the outset.
            </p>
            <p>
              <span>quality of food</span> <br />
              For our vegetarian guests, we offer a plethora of options that
              showcase the richness and variety of vegetarian cuisine. From
              delectable starters to hearty main courses, our vegetarian
              offerings are a celebration of flavors that elevate the dining
              experience to new heights.
              <br /> <br />
              Non-Vegetarian Extravaganza: Discerning carnivores will delight in
              our non-vegetarian selections, crafted with precision and passion.
              Explore a symphony of tastes as you savor succulent meats and
              expertly seasoned dishes that reflect our commitment to providing
              a comprehensive and satisfying dining experience.
              <br />
              <br />
              <span>Hospitality Beyond Expectations </span> <br /> At Vinyasa
              Residency, hospitality extends beyond the physical comforts of the
              hotel. Our dedicated staff is committed to ensuring that your stay
              is nothing short of exceptional. From seamless check-ins to
              personalized assistance, we go the extra mile to make you feel at
              home.
            </p>{" "}
          </div>

          <div className="why_cont2">
            <img src={outer} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>

      {/*  */}

      <Footer />
    </>
  );
};

export default Aboutpage;
