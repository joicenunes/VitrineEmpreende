import React from "react";
import './style.css';

export default function InputText(props) {
  return (
      <div className="Form-item">
      { props.label ? <label for={props.id}>{props.label}</label> : <></>}
      <br />
      <div className={ `Form-item-field ${props.noBorder ? "No-border" : "Border" }` }>
        { React.createElement(props.icon, { className: "Form-item-icon" })}
        <input id={props.id} name={props.id} type="text" placeholder={props.placeholder || ''} />
      </div>
    </div>
  );
}