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

  async function handleLogin(evt) {
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
    <div className="App-login">
      {<div className="App-login-image">
        <img src={empreendeImg} alt='Be The Hero' />
      </div>}
      <div className='App-login-form'>
        <form onSubmit={handleLogin} className="App-form" alt="logo">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            <strong>Bem-vindo(a)!</strong>
          </p>
          <p>Entre com seu usuário e senha para acessar o sistema.</p>
          <div className="App-login-fields">
            <InputText id="username" label="Usuário *" icon={ HiOutlineUserCircle } />
            <InputText id="password" label="Senha *" icon={ HiOutlineKey } />
          </div>
          <div className="Form-button">
            <button className='button' type='submit'>Entrar</button>
          </div>
          <div className="Form-links">
            <Link className="App-login-link" to ="/forgotpassword">Esqueceu a senha?</Link>
            <br />
            Não possui uma conta? <Link className='App-login-link' to="/register">Criar uma.</Link>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}