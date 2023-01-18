import  React from 'react';
import '../styles/home.css';
import Services2 from './Services2';
import AppBar from './AppBar';
import pic2 from '../images/pic2.jpg'
import {TiTickOutline } from 'react-icons/ti';

export default class Home extends React.Component{

  render(){
  return (
      <React.Fragment>
      <AppBar/>
      <div className="banner">
        <div className="banner-text">
          <h1>Your No1. Hair Studio </h1>
          <p>Style your hair today</p>
          <div className="banner-btn">
            <a href="/service"><span></span>Book Now</a>
          </div>
        </div>
      </div>

      <section id="service">
          <div>
            <Services2/>
          </div>
        </section>

      <div className="features">     
          <p>Features</p>
          <h1>Why Choose Us</h1>
      </div>
      <div className="features-box">

        <div className="feature">
          <h1>Skilled Staff</h1>
          <div className="features-desc">
            <div className="features-icon">
              <TiTickOutline/>
            </div>
            <div className="features-txt">
              <p>Get the best experience from our world class staff</p>
            </div>
          </div>
        </div>

        <div className="feature">
          <h1>Pre-Booking</h1>
          <div className="features-desc">
            <div className="features-icon">
              <TiTickOutline/>
            </div>
            <div className="features-txt">
              <p>Get the best experience from our world class staff</p>
            </div>
          </div>
        </div>

        <div className="feature">
          <h1>Cost</h1>
          <div className="features-desc">
            <div className="features-icon">
              <TiTickOutline/>
            </div>
            <div className="features-txt">
              <p>Get the best experience from our world class staff</p>
            </div>
          </div>
        </div>

        


        


      </div>
      </React.Fragment>



  );
}
}