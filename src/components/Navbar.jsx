import React from 'react'
import { IoMdCall } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";

import './navbar.css'
const Navbar = () => {
  return (
  <>    
      <section>
        <div className="header">

            <div className="logo">
          
             
                <h1>vinyasa <span>residency</span></h1>
            </div>
            <div className="menu">
                <ul>
                    <li>home</li>
                    <li>contact</li>
                    <li>about</li>
                    <li>blog</li>
                </ul>
            </div>

            <div className="booknow">

                <a href="#" class="btn">Book Now</a>
                {/* <a href="" > <IoMdCall /> 9699691949</a> */}
            </div>

<div className="icons">
            <RiMenu2Fill  />
            </div>
        </div>
      </section>
  </>
  )
}

export default Navbar