import React from "react";
import './style.css';

function CardTitle({ children, color }) {
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
      className='card-title'
      style={{ color: setColor(color) }}
    >
      {children}
    </div>
  );
}

function CardBody(props) {
  return (
    <div className='card-body'>
      {props.children}
    </div>
  );
}

function Card(props) {
  return (
    <div className='card'>
      {props.children}
    </div>
  );
}

export {
  Card,
  CardBody,
  CardTitle
}