import s from "./CategoryNoFound.module.scss";

const CategoryNoFound = () => {
  return (
    <div className={s.container}>
      <h1 className={s.container__header}>[-] Category no found</h1>
      <h2 className={s.container__header}>Available: </h2>
      <h3 className={s.container__header}>React, Web Development, Learn Tips</h3>
    </div>
  );
};

export default CategoryNoFound;
