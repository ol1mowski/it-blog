import s from "./Header.module.scss";
import { useRef } from "react";
import { useEffect } from "react";

const Header = () => {
  const showHamburgerMenu = useRef(null);
  const hamburgerMenu = useRef(null);
  const navigationSection = useRef(null);
  const closeHamburgerMenu = useRef(null);

  useEffect(() => {
    const showMenuHandler = () => {
      hamburgerMenu.current.style.display = "block";
      // showHamburgerMenu.current.style.display='none';
    };

    showHamburgerMenu.current.addEventListener("click", showMenuHandler);

    return () => {
      showHamburgerMenu.current.removeEventListener("click", showMenuHandler);
    };
  }, [showHamburgerMenu]);

  useEffect(() => {
    const hideMenuHandler = () => {
      hamburgerMenu.current.style.display = "none";
    };

    closeHamburgerMenu.current.addEventListener("click", hideMenuHandler);

    return () => {
      closeHamburgerMenu.current.removeEventListener("click", hideMenuHandler);
    };
  }, [closeHamburgerMenu]);

  return (
    <>
      <header ref={navigationSection} className={s.header}>
        <section className={s.header__titleSection}>
          <img
            width="45"
            height="45"
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/programming-flag.png"
            alt="programming-flag"
          />
          <h2 className={s.header__h2}>IT-Blog</h2>
        </section>
        <section className={s.header__navMenu}>
          <div className={s.header__navMenu__nav}>
            <ul className={s.header__navMenu__items}>
              <li className={s.header__navMenu__items__item}>
                Recommended courses
              </li>
              <li className={s.header__navMenu__items__item}>
                Books for programmer
              </li>
              <li className={s.header__navMenu__items__item}>About Author</li>
            </ul>
          </div>
          <img
            className={s.header__navMenu__search}
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/000000/search--v1.png"
            alt="search--v1"
          />
        </section>
        <section ref={showHamburgerMenu} className={s.header__hamburgerSection}>
          <img
            width="45"
            height="45"
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/menu-squared-2.png"
            alt="menu-squared-2"
          />
        </section>

        <menu ref={hamburgerMenu} className={s.header__hamburgerMenu}>
          <section
            ref={closeHamburgerMenu}
            className={s.header__hamburgerMenu__close}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/delete-sign.png"
              alt="delete-sign"
            />
          </section>
          <nav className={s.header__hamburgerMenu__nav}>
          <img className={s.header__hamburgerMenu__nav__imgJava} width="100" height="100" src="https://img.icons8.com/dusk/100/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
            <ul className={s.header__hamburgerMenu__nav__items}>
              <li className={s.header__hamburgerMenu__nav__items__item}>
                Recommended courses
              </li>
              <li className={s.header__hamburgerMenu__nav__items__item}>
                Books for programmer
              </li>
              <li className={s.header__hamburgerMenu__nav__items__item}>About Author</li>
            </ul>
            <img className={s.header__hamburgerMenu__nav__imgReact} width="200" height="200" src="https://img.icons8.com/clouds/300/react.png" alt="react"/>
          </nav>
        </menu>
      </header>
    </>
  );
};

export default Header;
