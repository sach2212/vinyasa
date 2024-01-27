import React from "react";
import { IoMdCall } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import contact from "./../components/page/contact";
import vr from "/images/vr.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";


import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const toogle = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <section>
        <div className="header">
          <div className="logo">
            <h1>
                {/* <img src={vr} alt="" className="vrlogo" /> */}
              vinyasa <span>residency</span>
            </h1>
          </div>
          <div className={`menu ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                {" "}
                <Link to="/home">home</Link>{" "}
              </li>
              <li>
                {" "}
                {/* <Link to="/contact">contact</Link>{" "} */}
              </li>  
              
              <li>
                {" "}
                <Link to="/places">places</Link>{" "}
              </li> 
              <li>
                {" "}
                <Link to="/about">about</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/gallery">gallery</Link>{" "}
              </li>
            </ul>
          </div>

          <div className="booknow">
            <a href="https://wa.me/+919699691949" class="buttons">
              Book Now
            </a>
            {/* <a href="" > <IoMdCall /> 9699691949</a> */}
          </div>

          <div className="icons" onClick={toogle}>
            <RiMenu2Fill />
          </div>

          <div className={isOpen ? "mobile_menu active" : "mobile_menu"}>
          <MdClose  className="icons-close"  onClick={ () => setIsopen(!isOpen)  }/>
            {/* <RiMenu2Fill className="icons"  onClick={() => setnav(!isOpen)} /> */}

            <ul className="mobile_ul">
            <li>
                {" "}
                <Link to="/home">home</Link>{" "}
              </li>
              <li>
                {" "}
                {/* <Link to="/contact">contact</Link>{" "} */}
              </li>  
              
              <li>
                {" "}
                <Link to="/places">places</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/about">about</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/gallery">gallery</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
