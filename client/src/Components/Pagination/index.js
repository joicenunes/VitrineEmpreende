import React from 'react';
import './style.css';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Buttons from './memo';

export default function Pagination({ page, onClickPageButton, totalPages, maxButtonsVisible }) {
  return (
    <div className='pagination'>
      <button
        className='pagination-button action'
        onClick={() => onClickPageButton(page - 1)}
        disabled={page === 1}
      >
        <MdChevronLeft size={18} />
      </button>
      <Buttons
        onClickNumberButton={onClickPageButton}
        currentPage={page}
        maxButtonsVisible={maxButtonsVisible}
        totalPages={totalPages}
      />
      <button
        className='pagination-button action'
        onClick={() => onClickPageButton(page + 1)}
        disabled={page === totalPages}
      >
        <MdChevronRight size={18} width={3} />
      </button>
    </div>
  );
}