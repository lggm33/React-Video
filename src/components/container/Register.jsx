import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../../redux/actions';
import '../../assets/styles/componets/Register.scss';
import Header from '../Header';
import Footer from '../Footer';

const Register = ({ registerRequest, history }) => {

  const [validEmail, setValidEmail] = useState(true);

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.email.indexOf('@') === -1) {
      setValidEmail(false);
    } else {
      registerRequest(form);
      history.push('/');
    }
  };

  return (
    <>
      <Header />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              className='input'
              type='text'
              placeholder='Nombre'
              name='name'
              onChange={handleChange}
            />
            {validEmail ? null : <p className='red'>Correo invalido</p> }
            <input
              className='input'
              type='text'
              placeholder='Correo'
              name='email'
              onChange={handleChange}
            />
            <input
              className='input'
              type='password'
              placeholder='Contraseña'
              name='password'
              onChange={handleChange}
            />
            <button type='submit' className='button'>Registrarme</button>
          </form>
          <Link to='/login'>
            Iniciar sesión
          </Link>
        </section>
      </section>
      <Footer />
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
