import React from "react";
import almonds from "../images/c-almonds-small.png";
import chocolate from "../images/c-chocolate-small-2.png";
import strawberry from "../images/c-strawberry-small.png";
import Lollyup from "../images/Lolly-up-Small.png";
import frula from "../images/Frula-small.png";
import "./items.css"; 

const impulseItems = [
  {
    id: 1,
    name: "Almonds",
    category: "Charms",
    image: almonds,
  },
  {
    id: 2,
    name: "Strawberry White Chocolate",
    category: "Charms",
    image: chocolate,
  },
  {
    id: 3,
    name: "Double Chocolate",
    category: "Charms",
    image: strawberry,
  },
  {
    id: 4,
    name: "Lolly up",
    category: "",
    image: Lollyup,
  },
  {
    id: 5,
    name: "Frula",
    category: "",
    image: frula,
  },
];

function Impluse() {
  return (
    <div className="container">
      <h1>Impulse (Single Serve)</h1>
      <div className="items">
        {impulseItems.map((item) => (
          <div key={item.id} className="item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              {item.category && <p className="category">{item.category}</p>}
              <p className="name">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Impluse;