
import React from 'react'
import './Footer.css'
import { IoCall } from "react-icons/io5";
// import Link from "react-router-dom"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'> 

        <div className="footer_head">
          <h1>vinyasa <br />  <span>residency</span> </h1>
        </div>
      <div className="footer_cont">
    
      <div className="fo_cont">
        <h2>quick links</h2>
        <p> <Link to = "/home">home</Link> </p>
        <p><Link to = "/contact">contact</Link> </p>
        <p> <Link to = "/about">about</Link> </p>  
        <p> <Link to = "/about">gallery</Link>ut</p>

      </div>    
       
      
      <div className="fo_cont">
        <h2>keywords</h2>
        <p>budget hotels for couples</p>
        <p>budget hotels in mumbai</p>
        <p>affordable hotels near mumbai</p>
        

      </div>

      <div className="fo_cont">
        <h2>contact us</h2>
        <p> <a href="tel:+919699691949">    <IoCall className='call' />
             9699691949 </a>      </p>
        {/* <p>085919 60434</p> */}
        <p className='address'>Bakery Galee, BP Rd, <br />
         Bhayandar, Venkateshwar Nagar
          Bhayandar East, <br /> 
          
        </p>
        <p>Mira Bhayandar, Maharashtra 
          401105</p>
     

      </div>

      </div>
    
    </div>
  )
}

export default Footer