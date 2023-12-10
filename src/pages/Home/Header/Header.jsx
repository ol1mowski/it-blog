import s from "./Header.module.scss";
import { useRef } from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import SearchSetion from "./SearchSection/SearchSetion";

const Header = () => {
  const navigationSection = useRef(null);

  const showHamburgerMenu = useRef(null);

  const searchIcon = useRef(null);

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
            ref={searchIcon}
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

        {/* Hamburger Menu */}

        <HamburgerMenu showHamburgerMenu={showHamburgerMenu} />

        <SearchSetion searchIcon={searchIcon} />
      </header>
    </>
  );
};

export default Header;
