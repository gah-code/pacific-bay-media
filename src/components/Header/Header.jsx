import React from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

import './Header.style.scss';
import HeroImg from '../../img/hero.jpg';

const Header = () => {
  return (
    <section>
      <Navigation />
      <header>
        <div className='header__content'>
          <h1 className='heading-primary'>See it Through</h1>
          <p className='header__description'>
            We offer creative storytelling through compelling digital media
            content
          </p>
          <Button>Learn more </Button>
          {/* <Button>Learn more </Button> */}
          {/* <img src={HeroImg} alt='' className='header__img' alt='PBM items' /> */}
        </div>
      </header>
    </section>
  );
};

export default Header;
