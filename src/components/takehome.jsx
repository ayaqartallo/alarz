import React from "react";
import hazelnut from "../images/c-hazelnut-Small.png";
import chocolate from "../images/c-chocolate-Small.png";
import Cookies from "../images/A--Cookies-Small.png";
import Caramel from "../images/A--Caramel-small.png";
import "./items.css"; 

const TakeHomeItems = [
  {
    id: 1,
    name: "Double Chocolate",
    category: "Charms Bites",
    image: chocolate,
  },
  {
    id: 2,
    name: "Hazelnut",
    category: "Charms Bites",
    image: hazelnut,
  },
  {
    id: 3,
    name: "Caramel",
    category: "Arz Premium",
    image: Caramel,
  },
  {
    id: 4,
    name: "Cookies & Cream",
    category: "Arz Premium",
    image: Cookies,
  },
];

function TakeHome() {
  return (
    <div className="container">
      <h1>Take-home packs</h1>
      <div className="items">
        {TakeHomeItems.map((item) => (
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

export default TakeHome;