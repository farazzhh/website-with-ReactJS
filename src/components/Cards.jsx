import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
const Cards = () => {
  return (
    <div className="cards">
      <h1>Check Out these EPIC Destination!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-1.jpg"
              text="Explore the Hidden WaterFall Deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Criuse"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-1.jpg"
              text="Explore the Hidden WaterFall Deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Criuse"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="/images/img-3.jpg"
              text="Explore the Hidden WaterFall Deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
