import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

import startupList from '../../Helper/mock';

import { Card, CardBody, CardTitle } from '../../Components/Card';
import Header from '../../Components/Header';
import TagList from '../../Components/TagList';
import StartupProfile from '../../Components/StartupProfile';

export default function Startup() {
  const { id } = useParams();
  const [startup, setStartup] = useState({
    id: '',
    description: '',
    img: null,
    name: '',
    email: '',
    tags: []
  });

  useEffect(() => {
    let findId = id ?? localStorage.getItem("myId");
    let selected = startupList.find(el => parseInt(findId) === el.id);
    setStartup(selected);
  }, [id]);

  return (
    <div className='startup'>
      <Header />
      <div className='page-content'>
        <div className='startup-info-wrap'>
          <StartupProfile
            color='primary'
            startup={startup}
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
                {startup.description}
              </CardBody>
            </Card>

            <Card>
              <CardTitle color='primary'>
                Áreas de atuação
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