import React, { /* useEffect, */ useEffect, useState } from 'react';
import './style.css'

import Header from '../../Components/Header';
import StartupProfile from '../../Components/StartupProfile';
import Pagination from '../../Components/Pagination';

import startupList from './mock';

export default function Vitrine() {
  const list = startupList;

  const [pageSize,] = useState(6);
  const [page, setPage] = useState(1);

  const [startups, setStartups] = useState([]);

  useEffect(_ => {
    setStartups(
      list.slice((page - 1) * pageSize, page * pageSize)
    );
  }, [list, page, pageSize]);

  const showStartupCard = (startup) => {
    return (
      <div key={startup.id} className='startup-card'>
        <div className='startup-card-content'>
          <StartupProfile startup={startup} hiddenSocialNetwork hiddenTags />
        </div>
      </div>
    );
  }

  const showStartups = () => {
    return startups.length ?
      startups.map(startup => showStartupCard(startup)) :
      <></>;
  }

  const onClickPageButton = (newPage) => {
    setPage(newPage);
  }

  return (
    <div>
      <Header />
      <div className='page-content'>
        <Pagination
          totalPages={Math.floor(list.length / pageSize)}
          maxButtonsVisible={5}
          page={page}
          onClickPageButton={onClickPageButton}
        />
        <div className='vitrine'>
          {showStartups()}
        </div>
      </div>
    </div>
  );
}