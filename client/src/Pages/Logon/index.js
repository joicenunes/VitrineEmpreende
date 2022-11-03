import React/* , { useState } */ from 'react';
import { Link } from 'react-router-dom';

import empreendeImg from '../../Assets/ft_condominio.png';

import { HiOutlineUserCircle, HiOutlineKey } from 'react-icons/hi2';
import InputText from '../../Components/InputText';

// import api from '../../services/api';

import './style.css';

export default function Logon() {
  // const [id, setId] = useState('');

  //   const history = useHistory();

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
    <div className='login'>
      <div className='login-image'>
        <img
          src={empreendeImg}
          alt='Empreende UFC'
        />
      </div>
      <div className='login-form'>
        <form
          onSubmit={handleLogin}
          className='form'
          alt='login-form'
        >
          {/* <img src={logo} className='logo' alt='logo' /> */}
          <p>
            <strong>Bem-vindo(a)!</strong>
          </p>
          <p>Entre com seu usuário e senha para acessar o sistema.</p>
          <div className='login-fields'>
            <InputText
              id='username'
              label='Usuário *'
              icon={HiOutlineUserCircle}
            />
            <InputText
              id='password'
              label='Senha *'
              icon={HiOutlineKey}
            />
          </div>
          <div className='form-button'>
            <button
              className='button'
              type='submit'
            >
              Entrar
            </button>
          </div>
          <div className='form-links'>
            <p>
              <Link
                className='login-link'
                to='/forgotpassword'
              >
                Esqueceu a senha?
              </Link>
            </p>
            <p>
              Não possui uma conta? <Link
                className='login-link'
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