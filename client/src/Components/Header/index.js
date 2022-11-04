import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Avatar from '../Avatar';

export default function Header(props) {
  return (
    <header>
      <div className='col'>
        <div className='logotipo'>
          LOGOTIPO
        </div>
      </div>
      <div className='col'></div>
      <div className='col right'>
        {/* <div className='actions'> */}
          <div className='search-startup'>
            <Link to='/vitrine'>Buscar startup</Link>
          </div>
        </div>
        <div class='col right'>
          <div className='user-avatar'>
            <Link to='/startup'>
              <Avatar name={'Joice Nunes'} />
            </Link>
          </div>
        {/* </div> */}
      </div>
    </header>
  );
}