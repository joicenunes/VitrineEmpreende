import React/* , { useState } */ from 'react';

import { HiMagnifyingGlass, HiOutlinePhoto,  } from 'react-icons/hi2';
import { RiLinkedinBoxLine, RiTwitterLine, RiGithubLine } from 'react-icons/ri';

import './style.css';

import Avatar from '../../Components/Avatar';
import { Card, CardBody, CardTitle } from '../../Components/Card';
import InputText from '../../Components/InputText';

export default function Startup() {
  const startupPhoto = null;
  const startup = {
    name: "Mock Startup"
  }

  return (
    <div className="App-startup">
      <div className="App-header">
        <div className='App-logotipo'>LOGOTIPO</div>
        <div className="App-actions">
          <InputText id="username" icon={HiMagnifyingGlass} noBorder placeholder="Buscar startup" />
          <Avatar name={"Joice Nunes"} />
        </div>
      </div>
      <div className='App-content'>
        <div className='App-startup-profile'>
          <Card>
            <CardBody>
              <div className='App-startup-avatar-border'>
                <div className='App-statup-avatar-img'>
                  {startupPhoto ?
                    <img src={startupPhoto} alt={startup.name} /> : <HiOutlinePhoto size={100} />}
                </div>
              </div>
              <div className='App-startup-name'>
                Startup Name
              </div>
              <div className='App-startup-contact'>startup@gmail.com</div>
              <div className='App-startup-social-network'>
                <RiLinkedinBoxLine/> <RiTwitterLine/> <RiGithubLine/>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='App-startup-cards'>
          <Card>
            <CardTitle>
              Sobre a equipe
            </CardTitle>
            <CardBody>
              Maecenas tincidunt, lacus eget faucibus bibendum, erat purus sodales purus, quis interdum turpis turpis vitae augue. Sed fermentum libero in est blandit congue. Donec nec lectus vitae metus euismod tempor. Curabitur maximus mollis sapien. Donec ut arcu tempus, pulvinar magna at, tincidunt magna. Fusce ut porttitor erat. Nunc malesuada nisi ac risus tristique condimentum.
            </CardBody>

          </Card>
          <Card>
            <CardTitle>
              Areas de atuação
            </CardTitle>
            <CardBody>

            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}