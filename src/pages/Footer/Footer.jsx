import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footerContainer}>
      <section className={s.footerContainer__top}>
        <div className={s.footerContainer__name}>
          <div className={s.footerContainer__name__wrapper}>
            <div className={s.footerContainer__name__wrapper__header}>
              <img
                width="75"
                height="75"
                src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/programming-flag.png"
                alt="programming-flag"
              />
              <h3 className={s.footerContainer__name__wrapper__header__h3}>
                IT-Blog for programmers.com
              </h3>
            </div>
            <div className={s.footerContainer__name__wrapper__img}>
              <img
                width="150"
                height="150"
                src="https://img.icons8.com/clouds/150/python.png"
                alt="python"
              />
            </div>
          </div>
        </div>
        <div className={s.footerContainer__navigation}>
          <div className={s.footerContainer__navigation__wrapper}>
            <div className={s.footerContainer__navigation__wrapper__nav}>
              <h3 className={s.footerContainer__navigation__wrapper__nav__h3}>
                Navigation
              </h3>
              <ul
                className={s.footerContainer__navigation__wrapper__nav__items}
              >
                <li
                  className={
                    s.footerContainer__navigation__wrapper__nav__items__item
                  }
                >
                  Home page
                </li>
                <li
                  className={
                    s.footerContainer__navigation__wrapper__nav__items__item
                  }
                >
                  Recommended courses
                </li>
                <li
                  className={
                    s.footerContainer__navigation__wrapper__nav__items__item
                  }
                >
                  Books for programmer
                </li>
                <li
                  className={
                    s.footerContainer__navigation__wrapper__nav__items__item
                  }
                >
                  About Author
                </li>
              </ul>
            </div>
            <div className={s.footerContainer__navigation__wrapper__sources}>
              <div
                className={
                  s.footerContainer__navigation__wrapper__sources__source
                }
                id={s.yt}
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/color/50/youtube-play.png"
                  alt="youtube-play"
                />
                <p
                  className={
                    s.footerContainer__navigation__wrapper__sources__source__content
                  }
                >
                  YouTube
                </p>
              </div>
              <div
               id={s.contact}
                className={
                  s.footerContainer__navigation__wrapper__sources__source
                }
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/clouds/50/contact-card.png"
                  alt="contact-card"
                />
                <p
                  className={
                    s.footerContainer__navigation__wrapper__sources__source__content
                  }
                >
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.footerContainer__signature}>
        <h4 className={s.footerContainer__signature__h4}>
          Designed by Oliwier Markiewicz
        </h4>
      </section>
    </footer>
  );
};

export default Footer;
