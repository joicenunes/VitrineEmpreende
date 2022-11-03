import React from 'react';
import './style.css';

import { MdSearch } from 'react-icons/md';

import Avatar from '../Avatar';
import InputText from '../InputText';

export default function Header(props) {
  return (
    <header>
      <div className='logotipo'>
        LOGOTIPO
      </div>
      <div className='actions'>
        <InputText
          id='username'
          icon={MdSearch}
          noBorder
          placeholder='Buscar startup'
        />
        <Avatar name={'Joice Nunes'} />
      </div>
    </header>
  );
}