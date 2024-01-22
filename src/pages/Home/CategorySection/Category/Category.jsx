import s from "../CategorySection.module.scss";

import { useContext, useRef } from "react";

import CategoryContext from "../../../../Context/categoryContext";

const Category = ({ name, image, id }) => {
  const item = useRef(null);
  const { setCurrentCategory } = useContext(CategoryContext);

  const itemClickHandler = () => {
    const postsElement = document.getElementById("posts");
    postsElement.scrollIntoView({ behavior: "smooth" });
    const prevItem = document.querySelector(
      `.${s.categoryContainer__wrapper__item_active}`
    );
    if (prevItem) {
      prevItem.classList.remove(`${s.categoryContainer__wrapper__item_active}`);
    }

    const currentCategoryId = item.current.id;
    setCurrentCategory(currentCategoryId);
    item.current.classList.add(`${s.categoryContainer__wrapper__item_active}`);
  };

  return (
    <div
      ref={item}
      onClick={itemClickHandler}
      id={id}
      className={s.categoryContainer__wrapper__item}
    >
      <img
        className={s.categoryContainer__wrapper__item__img}
        width="50"
        height="50"
        src={image}
        alt="code"
      />
      {name}
    </div>
  );
};

export default Category;
