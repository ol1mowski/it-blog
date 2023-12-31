import CategoryContext from "../../../Context/categoryContext";
import s from "./CategoryNoFound.module.scss";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../../../util/http";
import CategoryNoFoundComponent from "./Category/CategoryNoFoundComponent";

const CategoryNoFound = () => {
  const { setCurrentCategory } = useContext(CategoryContext);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
  });

  const CATEGORY = data || [];

  const category_available = CATEGORY.map((category) => category.name);

  console.log(category_available);

  return (
    <div className={s.container}>
      <h1 className={s.container__header}>[-] Category no found</h1>
      <div className={s.container__categoryContainer}>
        <h2 className={s.container__header}>Available: </h2>
        {category_available.map((category) => (
          <CategoryNoFoundComponent category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNoFound;
