import React from 'react';
import colorsMap from '../../Helper/colors';
import './style.css';

function Tag({ style, children }) {
  return (
    <button
      disabled
      className='tag'
      style={style}
    >
      {children}
    </button>
  )
}

export default function TagList(props) {
  const setTagStyle = (color, outline) => {
    let style = {};
    
    if (outline) {
      style.backgroundColor = 'transparent';
      style.borderStyle = 'solid';
      style.borderWidth = '1px';
      if (color) {
        style.color = colorsMap[color];
        style.borderColor = colorsMap[color];
      }
    } else {
      if (color) {
        style.color = '#fff';
        style.backgroundColor = colorsMap[color];
      }
    }
    return style;
  }

  const listTags = () => {
    return props.tags.map((tag, i) =>
      <Tag
        key={i}
        style={setTagStyle(props.color, props.outline)}
      > {tag} </Tag>
    )
  }

  return (
    <div className='tagList'>
      {props.tags.length > 0 && listTags()}
    </div>
  );
}