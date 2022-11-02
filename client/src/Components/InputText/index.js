import React from "react";
import './style.css';

export default function InputText(props) {
  function handleClick() {
    document.getElementById(props.id).focus();
  }

  function showLabel() {
    return props.label ?
      <label for={props.id}>{props.label}</label> :
      <></>;
  }

  return (
    <div
      className="Form-item"
      onClick={() => handleClick()}
    >
      {showLabel()}
      <br />
      <div className={`Form-item-field ${props.noBorder ? "No-border" : "Border"}`}>
        {React.createElement(props.icon, { className: "Form-item-icon" })}
        <input
          id={props.id}
          name={props.id}
          type="text"
          placeholder={props.placeholder || ''}
        />
      </div>
    </div>
  );
}