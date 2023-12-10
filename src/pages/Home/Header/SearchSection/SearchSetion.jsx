import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

import search from '../../../../assets/search.svg';

import s from '../Header.module.scss';

const SearchSetion = ({ searchIcon }) => {

  const searchSection = useRef(null);
  const searchWrapper = useRef(null);

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
    const dummy = (e) => {
      e.stopPropagation();
      // console.log("dd");
    };

    searchWrapper.current.addEventListener("click", dummy);

    return () => {
      searchWrapper.current.removeEventListener("click", dummy);
    };
  }, [searchWrapper]);

  return (
    <section ref={searchSection} className={s.header__searchSection}>
      <div
        ref={searchWrapper}
        className={s.header__searchSection__searchPlace}
      >
        <input
          placeholder="Enter category"
          type="text"
          name="search"
          className={s.header__searchSection__searchPlace__inp}
        />
        <button className={s.header__searchSection__searchPlace__btn}>
          <img width="20" height="20" src={search} alt="search--v1" />
        </button>
      </div>
    </section>
  )
}

export default SearchSetion;
