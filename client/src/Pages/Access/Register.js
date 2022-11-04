import React/* , { useState } */ from 'react';

import empreendeImg from '../../Assets/ft_condominio.png';

import { MdAccountCircle, MdOutlineEmail, MdVpnKey } from 'react-icons/md';
import InputText from '../../Components/InputText';

import './style.css';
import Button from '../../Components/Button';

export default function Register() {
  const imageConfig = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${empreendeImg})`;

  const handleRegister = async (evt) => {
    evt.preventDefault();
    alert('clicked');

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
          onSubmit={handleRegister}
          className='form'
          alt='access-form'
        >
          <p>
            <strong>Realize o seu cadastro!</strong>
          </p>
          <p>Preencha os dados abaixo e confirme o seu perfil.</p>
          <div className='access-fields'>
            <InputText
              color='primary'
              id='username'
              label='Usuário *'
              icon={MdAccountCircle}
            />
            <InputText
              color='primary'
              type='email'
              id='email'
              label='Email *'
              icon={MdOutlineEmail}
            />
            <InputText
              color='primary'
              id='password'
              type='password'
              label='Senha *'
              icon={MdVpnKey}
            />
            <InputText
              color='primary'
              id='passwordToCompare'
              type='password'
              label='Confirmar senha *'
              icon={MdVpnKey}
            />
          </div>
          <Button
            color='primary'
          >
            Enviar código
          </Button>
        </form>
      </div>
    </div>
  );
}