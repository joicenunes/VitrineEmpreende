import React/* , { useState } */ from 'react';

import './style.css';

import { Card, CardBody, CardTitle } from '../../Components/Card';
import Header from '../../Components/Header';
import TagList from '../../Components/TagList';
import StartupProfile from '../../Components/StartupProfile';

export default function Startup() {
  
  const startup = {
    id: 1,
    img: null,
    name: "Startup Exemplo",
    email: "startup@exemplo.com",
    tags: "Maecenas tincidunt, lacus eget faucibus bibendum, erat purus sodales purus, quis interdum turpis turpis vitae augue. Sed fermentum libero in est blandit congue. Donec nec lectus vitae metus euismod tempor. Curabitur maximus mollis sapien. Donec ut arcu tempus, pulvinar magna at, tincidunt magna. Fusce ut porttitor erat. Nunc malesuada nisi ac risus tristique condimentum.".split(' ')
  };

  return (
    <div className='startup'>
      <Header />
      <div className='page-content'>
        <div className='startup-info-wrap'>
          <StartupProfile color='primary' startup={startup} hiddenTags />
          <div className='startup-cards'>
            <Card>
              <CardTitle color='primary'>
                Sobre a equipe
              </CardTitle>
              <CardBody>
                Maecenas tincidunt, lacus eget faucibus bibendum, erat purus sodales purus, quis interdum turpis turpis vitae augue. Sed fermentum libero in est blandit congue. Donec nec lectus vitae metus euismod tempor. Curabitur maximus mollis sapien. Donec ut arcu tempus, pulvinar magna at, tincidunt magna. Fusce ut porttitor erat. Nunc malesuada nisi ac risus tristique condimentum.
              </CardBody>
            </Card>

            <Card>
              <CardTitle color='primary'>
                Areas de atuação
              </CardTitle>
              <CardBody>
                <TagList color='primary' tags={startup.tags} />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}