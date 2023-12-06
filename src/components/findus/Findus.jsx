import React from 'react';
import './findus.css';
import { images } from '../../constants';

const Workhours = () => (
  <div className="kat__findus-availability-box" id='contact'>
    <div className="kat__findus-banner">
      <p>Come Find Us:</p>
    </div>
    <div className="kat__findus-hours-box">
      <div className="kat__findus-hours-box-info">
        <div className="kat__findus-hours-box-title">
          <p>Working Hours</p>
        </div>
        <div className="kat__findus-hours-box-group">
          <div className="kat__findus-hours-box-day">
            <p>Monday - Friday</p>
          </div>
          <div className="kat__findus-hours-box-time">
            <p>9:30 am - 5pm</p>
          </div>
         </div>
        <div className="kat__findus-hours-box-group">
          <div className="kat__findus-hours-box-day">
            <p>Saturday</p>
          </div>
          <div className="kat__findus-hours-box-time">
            <p>Appointment only</p>
          </div>
        </div>
        <div className="kat__findus-hours-box-group">
          <div className="kat__findus-hours-box-day">
            <p>Sunday</p>
          </div>
          <div className="kat__findus-hours-box-time">
            <p>Closed</p>
          </div>
         </div>
         <div className="kat__findus-hours-box-address">
          <p>T2/152 Great Eastern Hwy, Ascot WA 6104</p>
        </div>
        <div className="kat__findus-hours-box-asterix">
          <p>*Call us now on +08 64 603 830</p>
        </div>
      </div>
    </div>
  </div>
);

const Findus = () => {
  return (
    <div className="kat__findus-container">
      <Workhours />
      <div className="kat__findus-googlemaps-box">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846.3981236946944!2d115.92040360540088!3d-31.944819272127223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ae0abdb219b9%3A0x1053ec7fbd2e4a94!2sKAT%20Accounting%20Services!5e0!3m2!1sen!2sau!4v1701753360796!5m2!1sen!2sau" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"> 
        </iframe>
      </div>
    </div>
  )
}

export default Findus