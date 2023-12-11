import s from "../CategorySection.module.scss";
import { useContext, useEffect, useRef } from "react";
import CategoryContext from "../../../Context/categoryContext";

const Category = ({ name, image, id }) => {
  const item = useRef(null);
  const { currentCategory, setCurrentCategory } = useContext(CategoryContext);

  useEffect(() => {
    const itemClickHandler = () => {
      const currentCategoryId = item.current.id;
      setCurrentCategory(currentCategoryId);
      item.current.classList.add(`${s.categoryContainer__wrapper__item_active}`)
    };

    item.current.addEventListener("click", itemClickHandler);
    return () => {
      item.current.removeEventListener("click", itemClickHandler);
    };
  }, [currentCategory, item]);


  return (
    <div ref={item} id={id} className={s.categoryContainer__wrapper__item}>
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
