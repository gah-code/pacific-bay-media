import React from 'react';

import './Navigation.style.css';
import Button from '../Button/Button';

const Navigation = () => {
  return (
    <nav className='nav'>
      <img className='nav__logo' alt='Pacific Bay Media Logo' />
      <ul className='nav__links'>
        <li className='nav__item'>
          <a href='' className='nav__link'>
            link
          </a>
        </li>
        <li className='nav__item'>
          <a href='' className='nav__link'>
            link
          </a>
        </li>
        <li className='nav__item'>
          <a href='' className='nav__link'>
            link
          </a>
        </li>
        <li className='nav__item'>
          <Button
            variant='navigation'
            href=''
            className='nav__link nav__link--btn btn--show modal'
          >
            Book Today
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
