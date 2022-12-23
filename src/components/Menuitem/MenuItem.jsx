import React from 'react';

import './MenuItem.css';

const MenuItem = ({ price, tags , title, }) => (
  <div className="holyfat__menuitem">
    <dir className="holyfat__menuitem-header">
      <div className="holyfat__menuitem-name">
        <p
          className="p__cormorant"
          style={{color: '#DCCA87'}}
        >
          {title}
        </p>
      </div>

      <div className="holyfat__menuitem-space"/>

      <div className="holyfat__menuitem-price">
        <p
          className="p__cormorant"
        >
          {price}
        </p>
      </div>
    </dir>
      <div className="holyfat__menuitem-sub">
        <p
          className="p__opensans"
          style={{color: '#aaa'}}
        >
          {tags}
        </p>
      </div>
  </div>
);

export default MenuItem;
