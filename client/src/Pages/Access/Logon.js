import React/* , { useState } */ from 'react';
import { Link } from 'react-router-dom';

import empreendeImg from '../../Assets/ft_condominio.png';

import { MdAccountCircle, MdVpnKey } from 'react-icons/md';
import InputText from '../../Components/InputText';

// import api from '../../services/api';

import './style.css';
import Button from '../../Components/Button';

export default function Logon() {
  // const [id, setId] = useState('');

  //   const history = useHistory();

  const imageConfig = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${empreendeImg})`;

  const handleLogin = async (evt) => {
    evt.preventDefault();

    // try {
    //   //   const res = await api.post('/sessions', { id });

    //   // localStorage.setItem('ongId', id);
    //   // localStorage.setItem('ongName', res.data.name);
    //   //   history.pushState('/profile');
    // } catch (e) {
    //   alert('Falha no login, verifique seu ID.');
    // }
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
          <Button
            color='primary'
          >
            Entrar
          </Button>
          <div className='form-links'>
            <p>
              <Link
                className='access-link'
                to='/forgotpassword'
              >
                Esqueceu a senha?
              </Link>
            </p>
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