import React from 'react'
import { IoMdCall } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import contact from "./../components/page/contact"
import { Link } from 'react-router-dom';

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
                   
                <li>  <Link to = "/home">home</Link>    </li>
                <li>  <Link to = "/contact">contact</Link>    </li>
                <li>  <Link to = "/about">about</Link>    </li>
                <li>  <Link to = "/about">gallery</Link>    </li>
         
                    
                </ul>
            </div>

            <div className="booknow">

                <a href="#" class="buttons">Book Now</a>
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