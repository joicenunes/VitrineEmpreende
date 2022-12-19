import React from 'react';
import './style.css';

import { MdSearch } from 'react-icons/md';
import Button from '../../Components/Button';
import InputText from '../../Components/InputText';

export default function StartupsFilter({ categories, selectedCategory, onSearchByText, onSelectCategory }) {

  const onClickFilterByTag = (tag) => {
    onSelectCategory(tag);
  }

  const filterStartupByText = (evt) => {
    onSearchByText(evt.target.value);
  }

  return (
    <header className='startup-filter'>
      <InputText
        color='primary'
        id='search'
        placeholder='Nome da startup'
        icon={MdSearch}
        onInputChange={(evt) => filterStartupByText(evt)}
      />
      {
        categories.length > 0 && categories.map((tag, index) => (
          <Button
            key={'tag' + index}
            color={'primary'}
            outline={selectedCategory === tag}
            onClickButton={() => onClickFilterByTag(tag)}
          >{tag}</Button>
        ))
      }
    </header>
  );
}