import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ item }) {
  return (
    <Link to={"mission/" + item.id} style={{ textDecoration: "none" }}>
      <div className="cardContainer">
        <img width={500} src={item.ships[0].image} />
        <h2 className="header">{item.mission_name}</h2>
        <span className="description">{item.details}</span>
      </div>
    </Link>
  );
}
