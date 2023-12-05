import React from 'react';
import './findus.css';
import { images } from '../../constants';

const Workhours = () => (
  <div className="kat__findus-availability-box">
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
      <div className="kat__findus-googlemaps-box section__padding">
        hello
      </div>
    </div>
  )
}

export default Findus