import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="holyfat__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="holyfat__footer-links">
      <div className="holyfat__footer-links_contact">
        <h1 className="holyfat__footer-headtext">
          Contact Us
        </h1>
        <p className="p__opensans">
          123 Somewhere Over The Rainbow, Wonderland
        </p>
        <p className="p__opensans">
          +1 212-344-1230
        </p>
        <p className="p__opensans">
          +1 212-555-1230
        </p>
      </div>

      <div className="holyfat__footer-links_logo">
        <img
          src={images.HolyFatWhite}
          alt="footer_logo"
        />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt="spoon"
        />
        <div className="holyfat__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="holyfat__footer-links_work">
        <h1 className="holyfat__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Holyfat. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
