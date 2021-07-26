/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../../redux/actions';
import googleIcon from '../../assets/static/google-icon.png';
import twitterIcon from '../../assets/static/twitter-icon.png';
import '../../assets/styles/componets/Login.scss';
import Header from '../Header';
import Footer from '../Footer';

const Login = (props) => {
  const { loginRequest, history } = props;

  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [validEmail, setValidEmail] = useState(true);
  const handleChangeInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email.indexOf('@') === -1) {
      setValidEmail(false);
    } else {
      loginRequest(form);
      history.push('/');
    }
  };

  return (
    <>
      <Header />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            {validEmail ? null : <p className='red'>Correo invalido</p> }
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleChangeInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleChangeInput}
            />
            <button type='submit' className='button' onSubmit={handleSubmit}>
              Iniciar sesión
            </button>
            <div className='login__container--remember-me'>
              <label>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='google-icon' />
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='twitter-icon' />
              Inicia sesión con Twitter
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            <Link to='/register'>
              . Registrate
            </Link>
          </p>
        </section>
      </section>
      <Footer />
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
