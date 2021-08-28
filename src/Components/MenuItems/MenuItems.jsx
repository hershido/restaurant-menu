import React from "react";

import "./MenuItems.scss";

export default function MenuItems({ dishes, category }) {
  const menuItems = dishes.map((dish, index) => {
    const style = { animationDelay: 0.1 * index + "s" };

    return (
      <div key={dish.id} style={style} className="menu-item">
        <p className="title">{dish.title}</p>
        <p className="price">{dish.price}</p>
        <p className="description">{dish.description}</p>
      </div>
    );
  });

  return <div className="menu-items">{menuItems}</div>;
}
