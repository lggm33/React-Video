/* eslint-disable no-else-return */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import Gravatar from './Gravatar';
import { logOutRequest } from '../redux/actions';
import '../assets/styles/componets/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import icon from '../assets/static/user-icon.png';

const Header = (props) => {

  const { user, logOutRequest, isPlayer } = props;

  const nameUser = (user) => {
    if (user.name.length === 0) {
      const indexEmail = user.email.indexOf('@');
      return (
        user.email.slice(0, indexEmail)
      );
    } else {
      return user.name;
    }
  };

  const isLogin = user.email.length > 0 ;

  const handleLogOut = () => {
    logOutRequest({ email: '', password: '' });
  };

  return (
    <header className={`header ${isPlayer ? 'black' : 'color'}`}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            isLogin ? (
              <Gravatar email={user.email} />
            ) : (
              <img src={icon} alt='icon' />
            )
          }
          <p>{ isLogin ? nameUser(user) : 'Perfil' }</p>
        </div>
        <ul>
          {
            isLogin ? (
              <>
                <li><Link to='/'>Cuenta</Link></li>
                <li><Link to='/' onClick={handleLogOut}>Cerrar Sesion</Link></li>
              </>
            ) : (
              <>
                <li><Link to='/register'>Registrate</Link></li>
                <li><Link to='/login'>Iniciar Sesion</Link></li>
              </>
            )
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

const mapDispatchToProps = {
  logOutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
