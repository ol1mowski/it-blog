import s from "./Header.module.scss";

import { useRef } from "react";
import { Link, NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import SearchSetion from "./SearchSection/SearchSetion";
import Footer from "../Footer/Footer";

import { fetchElements } from "../../../util/http";

const Header = () => {
  const { data } = useQuery({
    queryKey: ["subpage"],
    queryFn: () => fetchElements("subpages"),
  });

  const SUBPAGES = data || [];

  const navigationSection = useRef(null);

  const showHamburgerMenu = useRef(null);

  return (
    <>
      <ScrollRestoration />
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
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? `${s.header__navMenu__items__link_active}` : ""
                }
              >
                <li className={s.header__navMenu__items__item}>Home</li>
              </NavLink>
              {SUBPAGES.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.id}
                  className={({ isActive }) =>
                    isActive ? `${s.header__navMenu__items__link_active}` : ""
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
