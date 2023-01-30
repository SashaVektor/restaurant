import React from 'react';
import { images } from '../../constants'


import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content-about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt="about spoon"
          className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Veritatis nihil quam tenetur quis cumque. Eveniet necessitatibus
          facere mollitia sit, perspiciatis, velit non vitae ab corporis ea, molestias illum aliquam nemo.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content-knife'>
        <img src={images.knife} alt="knife" />
      </div>
      <div className='app__aboutus-content-history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about spoon"
          className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Veritatis nihil quam tenetur quis cumque. Eveniet necessitatibus
          facere mollitia sit, perspiciatis, velit non vitae ab corporis ea, molestias illum aliquam nemo.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
