import React, { useEffect, useState } from 'react';
import './style.css';

import { startupList, tags } from '../../Helper/startupsMock';

import Pagination from '../../Components/Pagination';
import StartupProfile from '../../Components/StartupProfile';
import StartupsFilter from '../../Components/StartupsFilter';

export default function Showcase() {
  const fullList = startupList;
  const categories = tags;

  const [pageSize,] = useState(6);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [category, setCategory] = useState('Todos');
  const [typeCounter, setTypeCounter] = useState(0);

  const [filter, setFilter] = useState('');
  const [startups, setStartups] = useState([]);

    useEffect(_ => {
    let list = fullList;
    if (filter.length > 0) {
      list = list.filter(startup =>
        startup.name.indexOf(filter) > -1
      )
    }
    if (category !== 'Todos') {
      list = list.filter(startup =>
        startup.tags.includes(category)
      );
    }
    
    setTotalPages(Math.floor(list.length / pageSize));

    setStartups(list.slice((page - 1) * pageSize, page * pageSize));
  }, [fullList, page, pageSize, category, filter]);

  const showStartupCard = (startup) => {
    return (
      <article key={'startup'+startup.id} className='startup-card'>
        <StartupProfile
          startup={startup}
          hiddenSocialNetwork
          hiddenTags
        />
      </article>
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

  const onSearchByText = (text) => {
    clearTimeout(typeCounter);
    setTypeCounter(
      setTimeout(() => setFilter(text), 1000)
    );
  }

  const onFilterByCategory = (category) => {
    setCategory(category);
    setPage(1);
  }

  return (
    <>
      <section className='page-content'>
        <section className='vitrine'>
        <StartupsFilter
            onSearchByText={(text) => onSearchByText(text)}
            categories={categories}
            selectedCategory={category}
            onSelectCategory={(selectedCategory) => onFilterByCategory(selectedCategory)}
          />

          <section className='wrap'>
            {showStartups()}
          </section>
        </section>

        <Pagination
          totalPages={totalPages}
          maxButtonsVisible={5}
          page={page}
          onClickPageButton={onClickPageButton}
        />
      </section>
    </>
  );
}