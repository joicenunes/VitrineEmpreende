import { memo, useEffect, useState } from "react";

function PaginationButton({ onClickNumberButton, active, number }) {
  return (
    <button
      className={`pagination-button ${active ? 'active' : ''}`}
      onClick={() => onClickNumberButton(number)}
    >
      {number}
    </button>
  )
}

const Buttons = ({ onClickNumberButton, currentPage, maxButtonsVisible, totalPages }) => {
  const [buttons,] = useState(Array(maxButtonsVisible).fill(0));
  const [firstButton, setFirstButton] = useState(1);
  const anchor = Math.ceil(maxButtonsVisible / 2);

  useEffect(() => {
    if (currentPage > anchor &&
        currentPage <= totalPages - Math.floor(maxButtonsVisible/2)
    ) {
      setFirstButton(currentPage - (anchor - 1));
    } else if (currentPage <= anchor) {
      setFirstButton(1);
    }
  }, [currentPage, anchor, totalPages, maxButtonsVisible]);

  return (
    <div>
      {
        maxButtonsVisible > 0 ?
          buttons.map((_, i) => {
            let number = i + firstButton;
            return (
              <PaginationButton
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