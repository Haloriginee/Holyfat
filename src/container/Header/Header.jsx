import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';


import './Header.css';

const Header = () => (
  <div className="holyfat__header holyfat__wrapper section__padding" id="home">
    <div className="holyfat__wrapper_info">
      <SubHeading
        title="Let's get fat"
      />
      <h1 className="holyfat__header-h1">
        The Key to an unHealthy lifestyle
      </h1>
      <p
        className="p__opensans"
        style={{ marginBottom: '2rem 0' }}
      >
        The only way to keep your unhealthty lifestyle is to eat what you want, drink what you like, and do what you want.
      </p>
      <button
        type='button'
        className="custom__button"
      >
        Explore Menu
      </button>
    </div>
    <div className="holyfat__wrapper_img">
      <img
        src={images.welcome}
        alt="fatness"
      />
    </div>
  </div>
);

export default Header;
