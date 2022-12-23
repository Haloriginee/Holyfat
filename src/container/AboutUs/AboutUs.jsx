import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="holyfat__aboutus holyfat__bg flex__center section__padding" id="about">
    <div className="holyfat__aboutus-overlay flex__center">

    </div>
    <div className="holyfat__aboutus-content flex__center">
      <div className="holyfat__aboutus-content_about">
        <h1 className="cormorant headtext">
          About Us
        </h1>
        <img
          src={images.spoon}
          alt="about spoon"
          className="spoon__img"
          />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
        <button
          type="button"
          className="custom__button"
        >
          Read More
        </button>
      </div>
      <div className="holyfat__aboutus-content-knife flex__center">
        <img
          src={images.knife}
          alt="knife"
        />
      </div>

      <div className="holyfat__aboutus-content_history">
        <h1 className="cormorant headtext">
          Our History
        </h1>
        <img
          src={images.spoon}
          alt="about spoon"
          className="spoon__img"
          />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
        <button
          type="button"
          className="custom__button"
        >
          Read More
        </button>
      </div>

    </div>
  </div>
);

export default AboutUs;
