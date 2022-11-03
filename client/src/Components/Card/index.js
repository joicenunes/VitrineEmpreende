import React from "react";
import './style.css';

function CardTitle(props) {
  return (
    <div className='card-title'>
      {props.children}
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