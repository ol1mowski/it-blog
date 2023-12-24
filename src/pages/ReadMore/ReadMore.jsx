import { useParams, useLoaderData, Link } from "react-router-dom";

import s from "./ReadMore.module.scss";
import { fetchPosts } from "../../util/http";

const ReadMore = () => {
  const { id } = useParams();

  const fetchData = useLoaderData();

  const { image, title, description, category, date } = fetchData.filter(
    (item) => item.category === id
  )[0];

  return (
    <section className={s.container}>
      <div className={s.container__navigation}>
        <Link to={"/"}>Home</Link>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/material-rounded/20/000000/double-right.png"
          alt="double-right"
        />
        {id}
      </div>

      <div className={s.container__image}>
        <img className={s.container__image__img} src={image} alt="post image" />
      </div>

      <div className={s.container__content}>
        <div className={s.container__content__tagsWrapper}>
          <div className={s.container__content__tagsWrapper__tag}>
            <span>{category}</span>
          </div>
          <div className={s.container__content__tagsWrapper__tag}>
            <span>{date}</span>
          </div>
        </div>
        <h1 className={s.container__content__title}>{title}</h1>
        <h3 className={s.container__content__description}>{description}</h3>

        <div className={s.container__content__authorContainer}>
          <div className={s.container__content__authorContainer__img}>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/fluency/50/person-male.png"
              alt="person-male"
            />
          </div>
          <p className={s.container__content__authorContainer__author}>
            Posted by Admin
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;

export const readMoreLoader = async () => {
  const data = await fetchPosts();

  return data;
};
