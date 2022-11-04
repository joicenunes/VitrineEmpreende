import React from 'react';
import './style.css';

function Tag({ style, children }) {
  return (
    <div
      className='tag'
      style={style}
    >
      {children}
    </div>
  )
}

export default function TagList(props) {
  const setTagStyle = (color) => {
    let style = {};
    switch (color) {
      case 'primary':
        style.backgroundColor = '#2EBEE5';
        style.color = '#fff';
        break;
      default:
        break;
    }
    return style;
  }

  const listTags = () => {
    return props.tags.map((tag, i) =>
      <Tag
        key={i}
        style={setTagStyle(props.color)}
      > {tag} </Tag>
    )
  }

  return (
    <div className='tagList'>
      {props.tags?.length > 0 ? listTags() : <></>}
    </div>
  );
}