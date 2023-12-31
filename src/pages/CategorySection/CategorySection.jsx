import Error from "../../Components/UI/Error/Error";
import Loading from "../../Components/UI/Loading/Loading";
import { fetchCategory } from "../../util/http";
import Category from "./Category/Category";
import s from "./CategorySection.module.scss";
import { useQuery } from "@tanstack/react-query";

const CategorySection = () => {
  const { data, status, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategory,
  });

  const CATEGORY_DATA = data || [];

  if (status === "success" && data) {
    return (
      <section className={s.categoryContainer}>
        <div className={s.categoryContainer__wrapper}>
          <div className={s.categoryContainer__wrapper__itemCategory}>
            <h2 className={s.categoryContainer__wrapper__itemCategory__content}>
              Categories:
            </h2>
          </div>
          {CATEGORY_DATA.map((item) => (
            <Category
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </section>
    );
  }
  if (status === "error") {
    <section className={s.categoryContainer}>
      <div className={s.categoryContainer__wrapper}>
        <Error message={error.message} />
      </div>
    </section>;
  }

  return (
    <section className={s.categoryContainer}>
      <div className={s.categoryContainer__wrapper}>
        <Loading />
      </div>
    </section>
  );
};

export default CategorySection;
