import React from 'react';
import '../assets/styles/componets/Header.scss';

const Header = (props) => (
  <header className='header'>
    <img className='header__img' src='../assets/images/logo-platzi-video-BW2.png' alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='../assets/user-icon.png' alt='' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;