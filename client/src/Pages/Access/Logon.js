import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import empreendeImg from '../../Assets/ft_condominio.png';

import './style.css';
import { MdAccountCircle, MdVpnKey } from 'react-icons/md';
import Button from '../../Components/Button';
import InputText from '../../Components/InputText';
import loginMock from '../../Helper/loginMock';

// import api from '../../services/api';

export default function Logon() {
  const navigate = useNavigate();

  const imageConfig = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${empreendeImg})`;

  const handleLogin = async (evt) => {
    evt.preventDefault();

    try {
      let username = evt.target.username.value;
      let password = evt.target.password.value;
      if (
        loginMock.username.toLowerCase() === username.toLowerCase() &&
        loginMock.password === password
      ) {
        localStorage.setItem('startupId', loginMock.startupId);
        localStorage.setItem('userId', loginMock.id);
        localStorage.setItem('userName', loginMock.name);
        navigate('/showcase');
      } else {
        throw Error('Falha no login, verifique suas credenciais.');
      }
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className='access'>
      <div
        className='access-image'
        style={{ backgroundImage: imageConfig }}
        alt='Empreende UFC'
      >
        <div className='access-image-title'>
          Portfólio de Startups
        </div>
      </div>
      <div className='access-form'>
        <form
          onSubmit={handleLogin}
          className='form'
          alt='access-form'
        >
          {/* <img src={logo} className='logo' alt='logo' /> */}
          <p>
            <strong>Bem-vindo(a)!</strong>
          </p>
          <p>Entre com seu usuário e senha para accessar o sistema.</p>
          <div className='access-fields'>
            <InputText
              color='primary'
              id='username'
              label='Usuário *'
              icon={MdAccountCircle}
            />
            <InputText
              color='primary'
              type='password'
              id='password'
              label='Senha *'
              icon={MdVpnKey}
            />
          </div>
          <Button block color='primary'>
            Entrar
          </Button>
          <div className='form-links'>
            <p>
              Não possui uma conta? <Link
                className='access-link'
                to='/register'
              >
                Criar uma.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}