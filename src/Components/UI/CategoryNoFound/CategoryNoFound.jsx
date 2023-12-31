import CategoryContext from "../../../Context/categoryContext";
import s from "./CategoryNoFound.module.scss";
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCategory } from "../../../util/http";

const CategoryNoFound = () => {

  const { setCurrentCategory} = useContext(CategoryContext);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['category'],
    queryFn: fetchCategory,
  });

  console.log(data);

  return (
    <div className={s.container}>
      <h1 className={s.container__header}>[-] Category no found</h1>
      <h2 className={s.container__header}>Available: </h2>
      <h3 className={s.container__header}>React, Web Development, Learn Tips</h3>
    </div>
  );
};

export default CategoryNoFound;
