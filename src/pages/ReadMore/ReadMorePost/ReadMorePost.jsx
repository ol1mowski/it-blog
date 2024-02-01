import s from '../ReadMore.module.scss';
import { Link } from 'react-router-dom';

export const ReadMorePost = ({ title, image, category, date, description }) => {
  return (
    <section className={s.container}>
      <div className={s.container__navigation}>
        <Link className={s.container__navigation__homeBack} to={"/"}>Home</Link>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/material-rounded/20/000000/double-right.png"
          alt="double-right"
        />
        {title}
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

        <div className={s.container__content__postWrapper}>
          <h1 className={s.container__content__postWrapper__title}>{title}</h1>
          <h3 className={s.container__content__postWrapper__description}>{description}</h3>
        </div>

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
  )
}
