import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

import { startupList } from '../../Helper/startupsMock';

import { Card, CardBody, CardTitle } from '../../Components/Card';
import Header from '../../Components/Header';
import TagList from '../../Components/TagList';
import StartupProfile from '../../Components/StartupProfile';

export default function Startup() {
  const defaultStartup = {
    id: 0,
    description: 'Lorem ipsum.',
    img: null,
    name: 'Default Startup',
    email: 'startup@default.com',
    tags: ['Padrão']
  };

  const { id } = useParams();
  const [startup, setStartup] = useState();

  useEffect(() => {
    let idToFind = id ?? localStorage.getItem("startupId");
    let selected = startupList.find(el => parseInt(idToFind) === el.id);
    setStartup(selected);
  }, [id]);

  return (
    <div className='startup'>
      <Header />
      <div className='page-content'>
        <div className='startup-info-wrap'>
          <StartupProfile
            color='primary'
            startup={startup ?? defaultStartup}
            hiddenTags
            hiddenDescription
            noLink
          />
          <div className='startup-cards'>
            <Card>
              <CardTitle color='primary'>
                Sobre a equipe
              </CardTitle>
              <CardBody>
                {startup?.description ?? defaultStartup.description}
              </CardBody>
            </Card>
            <Card>
              <CardTitle color='primary'>
                Áreas de atuação
              </CardTitle>
              <CardBody>
                <TagList color='primary' tags={startup?.tags ?? defaultStartup.tags} />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}