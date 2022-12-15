import React, { /* useEffect, */ useEffect, useState } from 'react';
import './style.css';

import { startupList, tags } from '../../Helper/mock';

import { MdSearch } from 'react-icons/md';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import InputText from '../../Components/InputText';
import Pagination from '../../Components/Pagination';
import StartupProfile from '../../Components/StartupProfile';

export default function Vitrine() {
  const fullList = startupList;

  const [pageSize,] = useState(6);
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState('Todos');

  const [startups, setStartups] = useState([]);

  useEffect(_ => {
    let list = fullList;
    if (tag !== 'Todos') {
      list = fullList.filter(startup =>
        startup.tags.includes(tag)
      );
    }
    setStartups(
      list.slice((page - 1) * pageSize, page * pageSize)
    );
  }, [fullList, page, pageSize, tag]);

  const showStartupCard = (startup) => {
    return (
      <div key={'startup'+startup.id} className='startup-card'>
        <div className='startup-card-content'>
          <StartupProfile
            startup={startup}
            hiddenSocialNetwork
            hiddenTags
          />
        </div>
      </div>
    );
  }

  const showStartups = () => {
    return startups.length > 0 ?
      startups.map(startup => showStartupCard(startup)) :
      <></>;
  }

  const onClickPageButton = (newPage) => {
    setPage(newPage);
  }

  const onClickFilterByTag = (tag) => {
    setTag(tag);
    setPage(1);
  }

  return (
    <div>
      <Header />
      <div className='page-content'>
        <div className='filtros'>
          <InputText
            color='primary'
            id='search'
            placeholder='Nome da startup'
            icon={MdSearch}
          />
          <Button
            color='primary'
            onClickButton={() => onClickFilterByTag('Todos')}
          >Todos</Button>
          {
            tags.length > 0 && tags.map((tag, index) => (
              <Button
                key={'tag'+index}
                color='primary'
                onClickButton={() => onClickFilterByTag(tag)}
              >{tag}</Button>
            ))
          }
        </div>

        <div className='vitrine'>
          <div className='wrap'>
            {showStartups()}
          </div>
        </div>

        <Pagination
          totalPages={Math.floor(startups.length / pageSize)}
          maxButtonsVisible={5}
          page={page}
          onClickPageButton={onClickPageButton}
        />
      </div>
    </div>
  );
}