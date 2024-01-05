import { useContext, useRef } from "react";
import { useEffect } from "react";

import s from "../Header.module.scss";
import SearchCategoryContext from "../../../../Context/SearchCategoryContext";
import search from "../../../../assets/search.svg";
import { NavLink } from "react-router-dom";

const HamburgerMenu = ({ showHamburgerMenu }) => {
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
      url: "author",
    },
  ];

  const { setSearchCategory } = useContext(SearchCategoryContext);

  const searchCategoryInput = useRef(null);

  const hamburgerMenu = useRef(null);

  useEffect(() => {
    const showMenuHandler = () => {
      if (hamburgerMenu.current) {
        hamburgerMenu.current.style.display = "block";
      }
    };

    const currentRef = showHamburgerMenu.current;

    if (currentRef) {
      currentRef.addEventListener("click", showMenuHandler);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("click", showMenuHandler);
      }
    };
  }, [showHamburgerMenu]);

  const hideMenuHandler = () => {
    hamburgerMenu.current.style.display = "none";
  };

  const categoryKeyHandler = (e) => {
    if (e.key === "Enter") {
      setSearchCategory(e.target.value);
      e.target.value = "";
      hamburgerMenu.current.style.display = "none";
      const postsElement = document.getElementById("posts");
      postsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categoryClickHandler = (e) => {
    const searchValue = searchCategoryInput.current.value;
    setSearchCategory(searchValue);
    e.target.value = "";
    hamburgerMenu.current.style.display = "none";
    const postsElement = document.getElementById("posts");
    postsElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <menu ref={hamburgerMenu} className={s.header__hamburgerMenu}>
      <section
        onClick={hideMenuHandler}
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
          {SUBPAGES.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              className={({ isActive }) =>
                isActive
                  ? `${s.header__hamburgerMenu__nav__items__link_active}`
                  : ""
              }
              onClick={hideMenuHandler}
            >
              <li className={s.header__hamburgerMenu__nav__items__item}>
                {item.name}
              </li>
            </NavLink>
          ))}
        </ul>
        <div className={s.header__hamburgerMenu__nav__search}>
          <input
            ref={searchCategoryInput}
            onKeyDown={categoryKeyHandler}
            placeholder="Enter category"
            type="text"
            name="search"
            className={s.header__hamburgerMenu__nav__search__inp}
          />
          <button
            onClick={categoryClickHandler}
            className={s.header__hamburgerMenu__nav__search__btn}
          >
            <img width="20" height="20" src={search} alt="search--v1" />
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
