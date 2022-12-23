import React from 'react';
import { images, data } from '../../constants'
import { SubHeading, MenuItem} from '../../components'

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="holyfat__specialMenu flex__center section__padding" id='menu'>
    <div className="holyfat__specialMenu-title">
      <SubHeading
        title="Heaven's Menu"
      />
      <h1 className="headtext__cormorant">
        Special menu
      </h1>
    </div>
    <div className="holyfat__specialMenu-menu">
      <div className="holyfat__specialMenu-menu_wine flex__center">
        <p className="holyfat__specialMenu-menu_heading">
          One step closer to heaven
        </p>
        <div className="holyfat__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>
      <div className="holyfat__specialMenu-menu_img">
        <img
          src={images.menu}
          alt="img menu"
        />
      </div>
      <div className="holyfat__specialMenu-menu_cocktails flex__center">
        <p className="holyfat__specialMenu-menu_heading">
          The end is near
        </p>
        <div className="holyfat__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
            key={cocktail.title + index}
            title={cocktail.title}
            tags={cocktail.tags}
            price={cocktail.price}
          />
          ))}
        </div>
      </div>
    </div>
    <div
      style={{marginTop: '16px'}}
    >
      <button
        type='button'
        className="custom__button"
      >
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
