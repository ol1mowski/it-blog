import { useContext, useRef } from "react";
import { useEffect } from "react";

import s from "../Header.module.scss";
import SearchCategoryContext from "../../../../Context/SearchCategoryContext";
import { ref } from 'firebase/storage';

const HamburgerMenu = ({ showHamburgerMenu }) => {
  const closeHamburgerMenu = useRef(null);

  const { setSearchCategory } = useContext(SearchCategoryContext);

  const searchButton = useRef(null);

  const searchCategoryInput = useRef(null);

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

  const categoryKeyHandler = (e) => {
    if (e.key === "Enter") {
      setSearchCategory(e.target.value);
      e.target.value = "";
      hamburgerMenu.current.style.display = "none";
      const postsElement = document.getElementById("posts");
      postsElement.scrollIntoView({ behavior: "smooth" });
    }
  };


  useEffect(() => {
    const categoryClickHandler = (e) => {
      const searchValue = searchCategoryInput.current.value;
      setSearchCategory(searchValue);
      e.target.value = "";
      hamburgerMenu.current.style.display = "none";
      const postsElement = document.getElementById('posts');
      postsElement.scrollIntoView({ behavior: 'smooth' });
    };

    searchButton.current.addEventListener("click", categoryClickHandler);

    return () => {
      searchButton.current.removeEventListener("click", categoryClickHandler);
    };
  }, [searchButton]);

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
            ref={searchCategoryInput}
            onKeyDown={categoryKeyHandler}
            placeholder="Enter sth"
            type="text"
            name="search"
            className={s.header__hamburgerMenu__nav__search__inp}
          />
          <button ref={searchButton} className={s.header__hamburgerMenu__nav__search__btn}>
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
