import React from 'react';
import { images } from '../../constants';
import "./footer.css";

const Footer = () => {
  return (
    <div className="test">
      <div className="kat__footer">
        <div className="kat__footer-links section__padding">
          <div className="kat__footer-links_contact">
            <h1 className="kat__footer-headtext">Contact Us</h1>
            <p>T2/152 Great Eastern Hwy, Ascot WA 6104</p>
            <p>(08) 1234 5678</p>
            <p></p>
          </div>
          <div className="kat__footer-links_logo">
            <img src={images.logoSmall} alt="footer_logo" />
            <p>"Your financial affairs are in good hands"</p>
            <div className="kat__footer-links-quicklinks">
              <h1 className="kat__footer-headtext">Quick Links</h1>
              <p>Home</p>
              <p>Services</p>
              <p>Resources</p>
              <p>About us</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="kat__footer-links_work">
            <h1 className="kat__footer-headtext">Working Hours</h1>
            <p>Monday - Friday:</p>
            <p>9:30 am - 5pm</p>
            <p>Saturday:</p>
            <p>Appointment Only</p>
            <p>Sunday:</p>
            <p>Closed</p>
          </div>
        </div>
        
      </div>
      <div className="footer__copyright">
          <p >© 2023 KAT Accounting Services. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer