import { useState } from "react";

export default function Category({
  category,
  currentCategory,
  changeCategory,
}) {
  console.log("drilled", category, currentCategory, changeCategory);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  function onHover() {
    console.log(category, " hovered");
    setHovered(!hovered);
  }

  function onClick() {
    setClicked(!clicked);
  }

  function categoryClass() {
    return hovered
      ? "category-hover"
      : "" + category === currentCategory
      ? "category-clicked"
      : "";
  }

  return (
    <div
      onClick={() => {
        changeCategory(category);
      }}
      className="category-container">
      {category === currentCategory && <div className="category-line"></div>}
      <p
        className={categoryClass()}
        onMouseEnter={onHover}
        onMouseLeave={onHover}>
        {category}
      </p>
    </div>
  );
}
