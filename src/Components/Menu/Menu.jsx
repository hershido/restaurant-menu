import React from "react";
import "./Menu.scss";
import MenuItems from "../MenuItems/MenuItems";
import Categories from "../Categories/Categories";
import data from "../../Data/data";
import { useState, useEffect } from "react";

export default function Menu() {
  const [dishes, setDishes] = useState([]);
  const [category, setCategory] = useState("snacks");

  const allItemCategories = data.map((dish) => dish.category);
  console.log(allItemCategories);

  const uniquCategories = new Set(allItemCategories);
  console.log(uniquCategories);

  const [categories, setCategories] = useState(Array.from(uniquCategories));

  function changeCategory(category) {
    setCategory(category);
    const filteredDishes = data.filter((dish) => dish.category === category);
    setDishes(filteredDishes);
  }

  useEffect(() => {
    changeCategory("snacks");
  }, []);

  return (
    <div className="menu">
      <div className="heading-container">
        <h1>MENU</h1>
      </div>
      <Categories
        categories={categories}
        changeCategory={changeCategory}
        currentCategory={category}
      />
      <MenuItems dishes={dishes} category={category} />
    </div>
  );
}
