import React, { /* useEffect, */ useEffect, useState } from 'react';
import './style.css';

import { startupList, tags } from '../../Helper/startupsMock';

import { MdSearch } from 'react-icons/md';
import Button from '../../Components/Button';
import { Card, CardBody } from '../../Components/Card';
import Header from '../../Components/Header';
import InputText from '../../Components/InputText';
import Pagination from '../../Components/Pagination';
import TagList from '../../Components/TagList';
import { Link } from 'react-router-dom';

export default function Showcase() {
  const fullList = startupList;

  const [pageSize,] = useState(6);
  const [page, setPage] = useState(1);
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
    setStartups(
      list.slice((page - 1) * pageSize, page * pageSize)
    );
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
      <Link to={`/startup/${startup.id}`}>
        <Card key={'startup' + startup.id}>
          <CardBody>
            <p>{startup.name}</p>
            <p>
              <TagList
                color='primary'
                outline
                tags={startup.tags}
              />
            </p>
            <p>
              <Button color={getColorByActivity(startup.activity)} disabled>{startup.activity}</Button>
            </p>
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

  const onClickFilterByTag = (tag) => {
    setCategory(tag);
    setPage(1);
  }

  const filterStartupByText = (evt) => {
    clearTimeout(typeCounter);
    setTypeCounter(
      setTimeout(() => setFilter(evt.target.value), 1000)
    );
  }

  return (
    <div>
      <Header />
      <section className='page-content'>
        <section className='startup-list'>
          <header className='filtros'>
            <InputText
              color='primary'
              id='search'
              placeholder='Nome da startup'
              icon={MdSearch}
              onInputChange={(evt) => filterStartupByText(evt)}
            />
            <Button
              color={'primary'}
              outline={category === 'Todos'}
              onClickButton={() => onClickFilterByTag('Todos')}
            >Todos</Button>
            {
              tags.length > 0 && tags.map((tag, index) => (
                <Button
                  key={'tag' + index}
                  color={'primary'}
                  outline={category === tag}
                  onClickButton={() => onClickFilterByTag(tag)}
                >{tag}</Button>
              ))
            }
          </header>

          <section className='wrap'>
            {showStartups()}
          </section>
        </section>

        <Pagination
          totalPages={Math.floor(startups.length / pageSize)}
          maxButtonsVisible={5}
          page={page}
          onClickPageButton={onClickPageButton}
        />
      </section>
    </div>
  );
}