import React from 'react';
import './style.css';

export default function Button(props) {
  const setButtonStyle = () => {
    let style = {};

    if (props.outline) {
      style.backgroundColor = 'transparent';
      style.borderStyle = 'solid';
      style.borderWidth = '1px';
      switch (props.color) {
        case 'primary':
          style.color = '#2EBEE5';
          style.borderColor = '#2EBEE5';
          break;
        case 'secondary':
          style.color = '#9ea5b7';
          style.borderColor = '#9ea5b7';
          break;
        default:
          break;
      }
    } else {
      switch (props.color) {
        case 'primary':
          style.color = '#fff';
          style.backgroundColor = '#2EBEE5';
          break;
        case 'secondary':
          style.backgroundColor = '#9ea5b7';
          break;
        default:
          break;
      }
    }

    return style;
  }
  return (
    <div className='form-button'>
      <button
        className='button'
        style={setButtonStyle()}
        onClick={props.onClickButton}
        type='submit'
      >
        { props.children }
      </button>
    </div>
  );
}