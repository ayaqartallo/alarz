import React from "react";
import scoops from "../images/3-Scoops-small.png";
import "./items.css"; 

const TakeHomeItems = [
  {
    id: 1,
    name: "Scoops 4.5 L",
    category: "",
    image: scoops,
  },
];

function Cateringpack() {
  return (
    <div className="container">
      <h1>Catering packs</h1>
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

export default Cateringpack;