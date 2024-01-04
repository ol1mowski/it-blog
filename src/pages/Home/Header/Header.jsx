import s from "./Header.module.scss";
import { useRef } from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { Link, NavLink, Outlet } from "react-router-dom";
import SearchSetion from "./SearchSection/SearchSetion";
import Footer from '../Footer/Footer';

const Header = () => {

  const SUBPAGES = [
    {
      id: 1,
      name: "Recommended courses",
      url: "recommended",
    },
    {
      id: 2,
      name: "Books for programmer",
      url: "books",
    },
    {
      id: 3,
      name: " About Author",
      url: "about",
    },
  ];

  const navigationSection = useRef(null);

  const showHamburgerMenu = useRef(null);

  return (
    <>
      <header ref={navigationSection} className={s.header}>
        <section className={s.header__titleSection}>
          <Link to={"/"}>
            <img
              width="45"
              height="45"
              src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/programming-flag.png"
              alt="programming-flag"
            />
          </Link>
          <h2 className={s.header__h2}>IT-Blog</h2>
        </section>
        <section className={s.header__navMenu}>
          <div className={s.header__navMenu__nav}>
            <ul className={s.header__navMenu__items}>
              {SUBPAGES.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.url}
                  className={({ isActive }) =>
                    isActive
                      ? `${s.header__navMenu__items__link_active}`
                      : ""
                  }
                >
                  <li className={s.header__navMenu__items__item}>
                    {item.name}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
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

        <SearchSetion />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
