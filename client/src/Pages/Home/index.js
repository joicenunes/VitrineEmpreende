import React from 'react';
import { Link } from 'react-router-dom';

import empreendeImg from '../../Assets/ft_condominio.png';

import '../Access/style.css';
import Button from '../../Components/Button';

export default function Home() {
  const imageConfig = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${empreendeImg})`;

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
        {/* <img src={logo} className='logo' alt='logo' /> */}
        <h1>Bem-vindo(a)!</h1>
        <p>O Portfólio de Startups é uma iniciativa do Condomínio de Empreendedorismo da Universidade Federal do Ceará.</p>
        <p>Nosso objetivo é promover as equipes participantes dos programas de fomento a inovação da universidade</p>
        <Link to="/vitrine">
          <Button
            color='primary'
          >
            Conhecer os projetos
          </Button>
        </Link>
      </div>
    </div>
  );
}