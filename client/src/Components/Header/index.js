import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Avatar from '../Avatar';

export default function Header(props) {
  return (
    <header>
      <div className='logotipo'>
        LOGOTIPO
      </div>
      <div className='actions'>
        <div className='search-startup'>
          <Link to='/vitrine'>Buscar startup</Link>
        </div>
        <div className='user-avatar'>
          <Link to='/startup'>
            <Avatar name={'Joice Nunes'} />
          </Link>
        </div>
      </div>
    </header>
  );
}