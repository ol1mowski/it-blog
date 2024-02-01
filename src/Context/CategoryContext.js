import { createContext } from "react";

const CategoryContext = createContext({
  currentCategory: null,
  setCurrentCategory: (category) => {
    setCurrentCategory(category);
  }
});

export default CategoryContext;
