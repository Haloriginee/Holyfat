import React from 'react';

import { images } from '../../constants'
import { SubHeading } from '../../components'

import './Chef.css';

const Chef = () => (
  <div className="holyfat__bg holyfat__wrapper section__padding">
    <div className="holyfat__wrapper_img holyfat__wrapper_img-reverse">
      <img
        src={images.chef}
        alt="chef"
      />
    </div>
    <div className="holyfat__wrapper_info">
      <SubHeading
        title="Our Chef"
      />
      <h1 className="headtext__cormorant">
        What we believe in
      </h1>
      <div className="holyfat__chef-content">
        <div className="holyfat__chef-content_quote">
          <img
            src={images.quote}
            alt="quote"
          />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </p>
      </div>
      <div className="holyfat__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img
          src={images.sign}
          alt="sign"
        />
      </div>
    </div>
  </div>
);

export default Chef;
