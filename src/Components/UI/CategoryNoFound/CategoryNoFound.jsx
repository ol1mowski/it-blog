import s from "./CategoryNoFound.module.scss";

const CategoryNoFound = () => {
  return (
    <div className={s.container}>
      <h1 className={s.container__header}>[-] Category no found</h1>
    </div>
  );
};

export default CategoryNoFound;
