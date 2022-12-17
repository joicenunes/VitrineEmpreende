import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './style.css';

import { startupList } from '../../Helper/startupsMock';

import { Card, CardBody, CardTitle } from '../../Components/Card';
//import Header from '../../Components/Header';
import TagList from '../../Components/TagList';
import StartupProfile from '../../Components/StartupProfile';

export default function Startup() {
  const defaultStartup = {
    id: 0,
    description: '',
    img: null,
    name: '',
    email: '',
    tags: []
  };

  const navigate = useNavigate();

  const { id } = useParams();
  const [startup, setStartup] = useState();

  useEffect(() => {
    let idToFind = id;
    if (idToFind) {
      let selected = startupList.find(el => parseInt(idToFind) === el.id);
      setStartup(selected);
    } else {
      navigate('/showcase');
    }
  }, [id, navigate]);

  return (
    <section className='startup'>
      {/* <Header /> */}
      <section className='page-content'>
        <section className='startup-info-wrap'>
          <StartupProfile
            color='primary'
            startup={startup ?? defaultStartup}
            hiddenTags
            hiddenDescription
            noLink
          />
          <article className='startup-cards'>
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
                <TagList
                  color='primary'
                  outline
                  tags={startup?.tags ?? defaultStartup.tags}
                />
              </CardBody>
            </Card>
          </article>
        </section>
      </section>
    </section>
  );
}