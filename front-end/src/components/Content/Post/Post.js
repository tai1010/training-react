import React from "react";
import "./style.scss";
import Layouts from "../../Layouts/Layouts";
import Card from "../../../assets/images/Card.png";

export default function Post() {
  const cards = [
    {
      title: "Card Title",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
    },
  ];
  const item = cards.map((card) => (
    <div className="item">
      <img src={Card} alt="Card" class="card-image" />
      <h3 className="title">{card.title}</h3>
      <p className="card-text">{card.text}</p>
    </div>
  ));

  let items = [];
  for (let i = 0; i < 12; i++) {
    items.push(item);
  }

  return (
    <Layouts>
      <div className="items">{items}</div>
    </Layouts>
  );
}
