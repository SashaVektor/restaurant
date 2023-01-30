import React from 'react';
import {FooterOverlay, Newsletter} from '../../components'
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links-contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St. New York, NY 10019, USA</p>
        <p className='p__opensans'>+123456789</p>
        <p className='p__opensans'>+132455799</p>
      </div>
      <div className='app__footer-links-logo'>
        <img src={images.gericht} alt="footer__logo" />
        <p className='p__opensans'>"The est way to find yourself is to lose yourself
        in the service of others."</p>
        <img src={images.spoon} alt="spoon" 
        className='spoon__img' style={{marginTop: 15}}/>
        <div className='app__footer-links-icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className='app__footer-links-work'>
      <h1 className='app__footer-headtext'>Working hours</h1>
        <p className='p__opensans'>Monday-Friday: </p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday: </p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className='footer__copy'>
      <p className='p__opensans'>2022 Gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
