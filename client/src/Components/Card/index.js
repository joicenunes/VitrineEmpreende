import React from "react";
import './style.css';

function CardTitle(props) {
  return (
    <div className="App-card-title">
      {props.children}
    </div>
  );
}

function CardBody(props) {
  return (
    <div className="App-card-body">
      {props.children}
    </div>
  );
}

function Card(props) {
  return (
    <div className="App-card">
      {props.children}
    </div>
  );
}

export {
  Card,
  CardBody,
  CardTitle
}