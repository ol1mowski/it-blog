import { useRef } from "react";
import { useEffect } from "react";

import s from '../Header.module.scss';

const HamburgerMenu = ({ showHamburgerMenu }) => {
  const closeHamburgerMenu = useRef(null);

  const hamburgerMenu = useRef(null);
  useEffect(() => {
    const showMenuHandler = () => {
      hamburgerMenu.current.style.display = "block";
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
        <img
          className={s.header__hamburgerMenu__nav__imgJava}
          width="100"
          height="100"
          src="https://img.icons8.com/dusk/100/java-coffee-cup-logo.png"
          alt="java-coffee-cup-logo"
        />
        <ul className={s.header__hamburgerMenu__nav__items}>
          <li className={s.header__hamburgerMenu__nav__items__item}>
            Recommended courses
          </li>
          <li className={s.header__hamburgerMenu__nav__items__item}>
            Books for programmer
          </li>
          <li className={s.header__hamburgerMenu__nav__items__item}>
            About Author
          </li>
        </ul>
        <div className={s.header__hamburgerMenu__nav__search}>
          <input
            placeholder="Enter sth"
            type="text"
            name="search"
            className={s.header__hamburgerMenu__nav__search__inp}
          />
          <button className={s.header__hamburgerMenu__nav__search__btn}>
            Search
          </button>
        </div>
        <img
          className={s.header__hamburgerMenu__nav__imgReact}
          width="200"
          height="200"
          src="https://img.icons8.com/clouds/300/react.png"
          alt="react"
        />
      </nav>
    </menu>
  );
};

export default HamburgerMenu;
