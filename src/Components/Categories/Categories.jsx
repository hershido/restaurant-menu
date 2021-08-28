import React from "react";
import "./Categories.scss";
import Category from "./Category";

export default function Categories({
  changeCategory,
  categories,
  currentCategory,
}) {
  console.log("Categories:", categories);
  const categoriesElements = categories.map((category, index) => (
    <Category
      key={index}
      category={category}
      currentCategory={currentCategory}
      changeCategory={changeCategory}
    />
  ));

  return <div className="categories">{categoriesElements}</div>;
}
