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
            <p>
              <a href="tel:064603830">(08) 64603830</a>
            </p>
          </div>
          <div className="kat__footer-links_logo">
            <img src={images.logoSmall} alt="footer_logo" />
            <p>"Your financial affairs are in good hands"</p>
            <div className="kat__footer-links-quicklinks">
              <h1 className="kat__footer-headtext">Quick Links</h1>
              <p>
                <a href='#home'>Home</a>
              </p>
              <p>
                <a href='#services'>Services</a>
              </p>
              <p>
                <a href='#whyus'>About Us</a>
              </p>
              <p>
                <a href='#contact'>Contact Us</a>
              </p>
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