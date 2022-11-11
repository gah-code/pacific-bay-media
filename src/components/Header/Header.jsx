import React from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

import './Header.style.scss';
import HeroImg from '../../img/hero.jpg';

const Header = () => {
  return (
    <header className='header'>
      <Navigation />
      <div className='header__title'>
        <h1>
          <span className='highlight'>Pacific</span>Bay
          <br />
          <span className='highlight'>Media</span>
        </h1>
        <h4>Our Vision</h4>
        <Button>Learn more </Button>
        <img src={HeroImg} alt='' className='header__img' alt='PBM items' />
      </div>
    </header>
  );
};

export default Header;
