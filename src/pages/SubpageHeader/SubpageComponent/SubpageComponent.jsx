import s from "../SubpageHeader.module.scss";

export const SubpageComponent = ({
  image,
  title,
  subtitle,
  description,
  icon,
}) => {
  return (
    <section className={s.subpageContainer}>
      <header className={s.subpageContainer__header}>
        <img
          src={image}
          alt="main image of subpage"
          className={s.subpageContainer__header__image}
        />
        <h3 className={s.subpageContainer__header__image__title}>{title}</h3>
      </header>
      <main className={s.subpageContainer__main}>
        <div className={s.subpageContainer__main__header}>
          <img width="75" height="75" src={icon} alt="title icon" />
          <h4 className={s.subpageContainer__main__header__caption}>
            {subtitle}
          </h4>
        </div>

        <div className={s.subpageContainer__main__article}>
          <img
            width="75"
            height="75"
            src="https://img.icons8.com/arcade/75/star.png"
            alt="description icon"
          />
          <p className={s.subpageContainer__main__article__content}>
            {description}
          </p>
        </div>
      </main>
    </section>
  );
};
