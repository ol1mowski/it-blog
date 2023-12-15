import React, { useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import search from "../../../../assets/search.svg";

import s from "../Header.module.scss";
import SearchCategoryContext from "../../../../Context/SearchCategoryContext";

const SearchSetion = ({ searchIcon }) => {
  const { setSearchCategory } = useContext(SearchCategoryContext);

  const searchSection = useRef(null);
  const searchWrapper = useRef(null);

  const searchButton = useRef(null);
  const searchCategoryInput = useRef(null);

  useEffect(() => {
    const showSearchSectionHandler = () => {
      searchSection.current.style.display = "flex";
    };

    searchIcon.current.addEventListener("click", showSearchSectionHandler);

    return () => {
      searchIcon.current.removeEventListener("click", showSearchSectionHandler);
    };
  }, [searchIcon]);

  useEffect(() => {
    const hideSearchSectionHandler = () => {
      searchSection.current.style.display = "none";
    };

    searchSection.current.addEventListener("click", hideSearchSectionHandler);

    return () => {
      searchSection.current.removeEventListener(
        "click",
        hideSearchSectionHandler
      );
    };
  }, [searchSection]);

  useEffect(() => {
    const unBlurryBackgroundHandler = (e) => {
      e.stopPropagation();
    };

    searchWrapper.current.addEventListener("click", unBlurryBackgroundHandler);

    return () => {
      searchWrapper.current.removeEventListener(
        "click",
        unBlurryBackgroundHandler
      );
    };
  }, [searchWrapper]);

  const categoryKeyHandler = (e) => {
    if (e.key === "Enter") {
      setSearchCategory(e.target.value);
      e.target.value = "";
      searchSection.current.style.display = "none";
      const postsElement = document.getElementById('posts');
      postsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const categoryClickHandler = (e) => {
      const searchValue = searchCategoryInput.current.value;
      setSearchCategory(searchValue);
      e.target.value = "";
      searchSection.current.style.display = "none";
      const postsElement = document.getElementById('posts');
      postsElement.scrollIntoView({ behavior: 'smooth' });
    };

    searchButton.current.addEventListener("click", categoryClickHandler);

    return () => {
      searchButton.current.removeEventListener("click", categoryClickHandler);
    };
  }, [searchButton]);

  return (
    <section ref={searchSection} className={s.header__searchSection}>
      <div ref={searchWrapper} className={s.header__searchSection__searchPlace}>
        <input
          ref={searchCategoryInput}
          onKeyDown={categoryKeyHandler}
          placeholder="Enter category"
          type="text"
          name="search"
          className={s.header__searchSection__searchPlace__inp}
        />
          <button
            ref={searchButton}
            className={s.header__searchSection__searchPlace__btn}
          >
            <img width="20" height="20" src={search} alt="search--v1" />
          </button>
      </div>
    </section>
  );
};

export default SearchSetion;
