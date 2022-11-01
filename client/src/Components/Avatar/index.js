import React from "react";
import './style.css';

export default function Avatar(props) {  
  function getInitials() {
    let names = props.name.split(' ');
    const last_name_index = names.length - 1;
    if (names.length > 1) {
      return names[0][0] + names[last_name_index][0];
    } else return props.name[0];
  }

  return (
    <div className="App-avatar">
      <div className="App-initials">
        {getInitials()}
      </div>
    </div>
  );
}