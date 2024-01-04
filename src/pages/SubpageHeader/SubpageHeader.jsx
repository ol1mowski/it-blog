import s from "./SubpageHeader.module.scss";

import image from "../../assets/main.jpeg";

const SubpageHeader = () => {
  return (
    <section className={s.subpageContainer}>
      <header className={s.subpageContainer__header}>
        <img
          src={image}
          alt=""
          className={s.subpageContainer__header__image}
        />
        <h3 className={s.subpageContainer__header__image__title}>
          Recommended Courses
        </h3>
      </header>
      <main className={s.subpageContainer__main}>
        <div className={s.subpageContainer__main__header}>
          <img
            width="75"
            height="75"
            src="https://img.icons8.com/external-flaticons-flat-flat-icons/75/external-courses-recruitment-agency-flaticons-flat-flat-icons.png"
            alt="external-courses-recruitment-agency-flaticons-flat-flat-icons"
          />
          <h4 className={s.subpageContainer__main__header__caption}>
            Unlocking Your Potential: Top Programming Courses of 2024
          </h4>
        </div>

        <div className={s.subpageContainer__main__article}>
          <img
            width="75"
            height="75"
            src="https://img.icons8.com/arcade/75/star.png"
            alt="star"
          />
          <p className={s.subpageContainer__main__article__content}>
            In the ever-evolving landscape of technology, staying ahead of the
            curve is not just an advantage – it's a necessity. As we step into
            2024, the demand for skilled programmers continues to soar, and the
            tools and languages they use are constantly evolving. Whether you're
            a seasoned developer looking to upgrade your skills or someone just
            embarking on their coding journey, the key to success lies in
            choosing the right courses. In this section, we'll be your guide
            through the maze of options, presenting a carefully curated list of
            the most subpage programming courses for 2024.
          </p>
        </div>
      </main>
    </section>
  );
};

export default SubpageHeader;
