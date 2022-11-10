import React from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

import './Header.style.css';

const Header = () => {
  return (
    <div className='header'>
      <Navigation />
      <div className='header__title'>
        <h1>
          <span className='highlight'>Pacific</span>Bay
          <br />
          <span className='highlight'>Media</span>
        </h1>
        <h4>another slogan would go here</h4>
        <Button>Learn more &DownArrow;</Button>
      </div>
    </div>
  );
};

export default Header;
