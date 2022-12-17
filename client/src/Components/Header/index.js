import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Avatar from '../Avatar';

export default function Header(props) {
  let [logged, /* setLogged */] = useState(localStorage.getItem('userId') !== null);
  let [userName, /* setUserName */] = useState(localStorage.getItem('userName'));

  return (
    <header>
      <div className='col'>
        <div className='logotipo'>
          LOGOTIPO
        </div>
      </div>
      <div className='col'></div>
      <div className='col right'>
        <div className='search-startup'>
          <Link to='/showcase'>Buscar startup</Link>
        </div>
      </div>
      <div className='col right'>
        <div className='user-avatar'>
          {
            logged ?
            <Link to={`/management`}>
              <Avatar name={userName} />
            </Link> :
            <Link to='/startup'>
              Entrar
            </Link>
          }
          
        </div>
      </div>
    </header>
  );
}