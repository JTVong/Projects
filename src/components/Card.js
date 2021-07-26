import React from "react";
import "./Card.css";

const Card = ({ id, name, username, email }) => {
  return (
    <div className="bg-gold dib br3 pa3 ma2 grow bw3 shadow-3">
      <img
        src={`https://robohash.org/${name + username}?150x150`}
        alt="Robot"
      />
      <div className="card-info tc">
        <h2>{name}</h2>
        <h3>-{username}-</h3>
        <h3>{email}</h3>
      </div>
    </div>
  );
};
export default Card;
