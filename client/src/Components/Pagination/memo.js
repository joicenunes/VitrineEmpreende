import { memo, useEffect, useState } from 'react';

function PaginationButton({ onClickNumberButton, active, number, disabled }) {
  return (
    <button
      className={`pagination-button ${active ? 'active' : ''}`}
      onClick={() => onClickNumberButton(number)}
      disabled={disabled}
    >
      {number}
    </button>
  )
}

const Buttons = ({ onClickNumberButton, currentPage, maxButtonsVisible, totalPages }) => {
  const [buttons,] = useState(Array(maxButtonsVisible).fill(0));
  const [paginationAnchor,] = useState(Math.ceil(maxButtonsVisible / 2));
  const [firstButton, setFirstButton] = useState(1);

  useEffect(() => {
    if (currentPage > paginationAnchor &&
        currentPage <= totalPages - Math.floor(maxButtonsVisible/2)
    ) {
      setFirstButton(currentPage - (paginationAnchor - 1));
    } else if (currentPage <= paginationAnchor) {
      setFirstButton(1);
    }
  }, [currentPage, paginationAnchor, totalPages, maxButtonsVisible]);

  return (
    <div>
      {
        maxButtonsVisible > 0 ?
          buttons.map((_, i) => {
            let number = i + firstButton;
            return (
              <PaginationButton
                disabled={ number > totalPages }
                key={number}
                onClickNumberButton={onClickNumberButton}
                number={number}
                active={currentPage === number}
              />
            );
          }) :
          ''
      }
    </div>
  );
};

export default memo(Buttons);