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
        <div className='link'>
          <Link to='/vitrine'>Buscar startup</Link>
        </div>
        <Avatar name={'Joice Nunes'} />
      </div>
    </header>
  );
}