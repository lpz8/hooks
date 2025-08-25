import React from "react";
import "./App.css";

export default function Character({ title, name, image }) {
  return (
    <div className="character-card">
      <h2>{title}</h2>
      <p>{name}</p>
      <img className="character-img" src={image} alt={name} />
    </div>
  );
}