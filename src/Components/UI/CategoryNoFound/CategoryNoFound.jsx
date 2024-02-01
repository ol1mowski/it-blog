import CategoryContext from "../../../Context/categoryContext";
import s from "./CategoryNoFound.module.scss";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchElements } from "../../../util/http";
import CategoryNoFoundComponent from "./Category/CategoryNoFoundComponent";

const CategoryNoFound = () => {
  const { setCurrentCategory } = useContext(CategoryContext);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => fetchElements('categories'),
  });

  const CATEGORY = data || [];


  console.log(data);

  return (
    <div className={s.container}>
      <h1 className={s.container__header}>[-] Category no found</h1>
      <div className={s.container__categoryContainer}>
        <h2 className={s.container__header}>Available: </h2>
        {CATEGORY.map((category) => (
          <CategoryNoFoundComponent key={category.id} category={category.name} id={category.id}/>
        ))}
      </div>
    </div>
  );
};

export default CategoryNoFound;
