import React from 'react';
import './style.css';

export default function InputText(props) {
  const handleClick = () => {
    document.getElementById(props.id).focus();
  }

  const showLabel = () => {
    return props.label ?
      <label for={props.id}>{props.label}</label> :
      <></>;
  }

  const setColor = (color) => {
    switch (color) {
      case 'primary':
        return '#2EBEE5';
      default:
        return; 
    }
  } 

  return (
    <div
      className='form-item'
      onClick={() => handleClick()}
    >
      {showLabel()}
      <br />
      <div className={`form-item-field ${props.noBorder ? 'no-border' : 'border'}`}>
        {React.createElement(props.icon, { className: 'form-item-icon', color: setColor(props.color), size: 18 })}
        <input
          id={props.id}
          name={props.id}
          type='text'
          placeholder={props.placeholder || ''}
        />
      </div>
    </div>
  );
}