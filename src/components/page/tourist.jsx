import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import "./tourist.css";
import airport from "/images/aiirport.jpg";
import beach from "/images/beach1.jpg";
import pagoda from "/images/pagoda.jpg";
import nall from "/images/nall.jpg";
import cave from "/images/cave.jpg";
import resort from "/images/resort.jpg";

const Tourist = () => {
  return (
    <>
      <Navbar />
      <div className="tourist">
        <div className="tourist_head">
          <h1 className="heading"> tourist attraction</h1>
        </div>
        <div className="tour_content">
          <div className="tour_cont1">
            <h3>
              Chhatrapati Shivaji Maharaj <br /> International Airport{" "}
            </h3>
            <p>
              {" "}
              &nbsp; &nbsp; The airport is approximately 20-25 kilometers away
              from Bhayandar, and the travel time may vary depending on the
              traffic conditions. Whether you're arriving in Mumbai or departing
              from the city, Chhatrapati Shivaji Maharaj International Airport
              serves as a major transportation hub for air travel.
            </p>
          </div>

          <div className="tour_cont2">
            <img src={airport} alt="" srcset="" />
          </div>
        </div>

        <div className="tour_content">
          <div className="tour_cont2">
            <img src={pagoda} alt="" srcset="" />
          </div>

          <div className="tour_cont1">
            <h3>
              Global Vipassana <br /> Pagoda
            </h3>
            <p>
              {" "}
              &nbsp; &nbsp; &nbsp; A serene and majestic structure located in
              Gorai, the Global Vipassana Pagoda is a meditation hall and a
              popular tourist destination, known for its peaceful surroundings.
              To reach the Global Vipassana Pagoda from Vinyasa Residency, you
              can consider taking a taxi, auto-rickshaw, or using other local
              transportation options available in Mumbai. The journey may take
              around 60-75 minutes which is 17.5km, depending on traffic
              conditions.
            </p>
          </div>
        </div>
        <div className="tour_content">
          <div className="tour_cont1">
            <h3>Gorai Beach</h3>
            <p>
              &nbsp; &nbsp;&nbsp; Gorai Beach is a popular destination known for
              its peaceful atmosphere and is worth a visit if you're looking to
              enjoy the coastline near Bhayandar. The distance between Vinyasa
              Residency in Bhayandar and Gorai Beach is approximately 15 to 16
              kilometers Gorai Beach is a popular destination known for its
              peaceful atmosphere and is worth a visit if you're looking to
              enjoy the coastline near Bhayandar.
            </p>
          </div>

          <div className="tour_cont2">
            <img src={beach} alt="" srcset="" />
          </div>
        </div>

        <div className="tour_content">
          <div className="tour_cont2">
            <img src={cave} alt="" srcset="" />
          </div>

          <div className="tour_cont1">
            <h3>Kanheri Caves</h3>
            <p>
              &nbsp; &nbsp;&nbsp; The Kanheri Caves are a group of rock-cut
              caves and a significant archaeological site located within the
              Sanjay Gandhi National Park in the northern part of Mumbai. the
              Kanheri Caves are approximately 20-25 kilometers away
            </p>
          </div>
        </div>

        <div className="tour_content">
          <div className="tour_cont1">
            <h3>EsselWorld and Water Kingdom</h3>
            <p>
              {" "}
              &nbsp; &nbsp; EsselWorld and Water Kingdom are popular amusement
              parks located in Gorai, which is not far from Bhayandar where
              Vinyasa Residency is situated. The approximate distance between
              Vinyasa Residency in Bhayandar and EsselWorld/Water Kingdom in
              Gorai is around 15-17 kilometers
            </p>
          </div>

          <div className="tour_cont2">
            <img src={resort} alt="" srcset="" />
          </div>
        </div>

        <div className="tour_content">
          <div className="tour_cont2">
            <img src={nall} alt="" srcset="" />
          </div>

          <div className="tour_cont1">
            <h3>maxus mall/cinema</h3>
            <p>
              Maxus Mall is a popular shopping destination located in Bhayandar,
              which is close to Vinyasa Residency. Maxus Mall is one of the
              prominent shopping and entertainment complexes in the area,
              offering a variety of retail stores, dining options, and
              entertainment facilities
            </p>
           
          </div>

          
        </div>
        {/* <a href="" className="buttons"> visit now</a> */}
      </div>

      <Footer/>
    </>
  );
};

export default Tourist;
