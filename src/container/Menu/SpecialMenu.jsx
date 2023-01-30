import React from 'react';
import { images, data } from '../../constants'
import {SubHeading, MenuItem} from '../../components'

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id="menu">
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits you palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu-wine flex__center'>
        <p className='app__specialMenu-menu-heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu-items'>
          {data.wines.map((wine, i) => (
            <MenuItem key={wine.title + i}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu-img'>
        <img src={images.menu} alt="menu img" />
      </div>
      <div className='app__specialMenu-menu-coctails flex__center'>
        <p className='app__specialMenu-menu-heading'>Coctails</p>
        <div className='app__specialMenu-menu-items'>
          {data.cocktails.map((coctail, i) => (
            <MenuItem key={coctail.title + i}
            title={coctail.title}
            price={coctail.price}
            tags={coctail.tags}
          />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View more</button>
    </div>
  </div>
);

export default SpecialMenu;
