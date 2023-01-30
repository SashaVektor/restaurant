import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper-img app__wrapper-img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper-info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>
        What We Believe In
      </h1>
      <div className='app__chef-content'>
        <div className='app__chef-content-quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. </p>
        </div>
        <div className='p__opensans'>Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Eius vitae
          veritatis nobis placeat eos at voluptas nisi
          suscipit eveniet similique autem, maiores iusto illum,
          quo esse fugit dolorem consequatur temporibus.</div>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
