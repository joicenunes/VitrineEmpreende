import React, { useEffect, useState } from 'react';
import './style.css';

import { startupList, tags } from '../../Helper/startupsMock';

import Button from '../../Components/Button';
import { Card, CardBody } from '../../Components/Card';
import Pagination from '../../Components/Pagination';
import StartupsFilter from '../../Components/StartupsFilter';
import TagList from '../../Components/TagList';
import { Link } from 'react-router-dom';

export default function Management() {
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

    let numberOfPages = Math.floor(list.length / pageSize);
    setTotalPages(numberOfPages < 1 ? 1 : numberOfPages);

    setStartups(list.slice((page - 1) * pageSize, page * pageSize));
  }, [fullList, page, pageSize, category, filter]);

  const getColorByActivity = (status) => {
    switch (status) {
      case 'Atualizado':
        return 'updated';
      case 'Inativo':
        return 'inactive';
      case 'Removido':
        return 'removed';
      default:
        return '';
    }
  }

  const showStartupCard = (startup) => {
    return (
      <Link key={'startup' + startup.id} to={`/startup/${startup.id}`}>
        <Card>
          <CardBody>
            <section>{startup.name}</section>
            <section>
              <TagList
                color='primary'
                outline
                tags={startup.tags}
              />
            </section>
            <section>
              <Button color={getColorByActivity(startup.activity)} disabled>{startup.activity}</Button>
            </section>
          </CardBody>
        </Card>
      </Link>
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
        <section className='startup-list'>
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