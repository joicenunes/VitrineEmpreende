import React from "react";
import './style.css';

function Tag(props) {
  return (
    <div className="tag">
      {props.children}
    </div>
  )
}

export default function TagList(props) {
  function listTags() {
    return props.tags.length > 0 ?
      props.tags.map(tag => <Tag> {tag} </Tag>) :
      <></>
  }

  return (
    <div className="tagList">
      {listTags()}
    </div>
  );
}