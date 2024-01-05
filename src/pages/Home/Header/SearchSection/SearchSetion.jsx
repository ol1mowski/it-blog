import { useContext, useRef } from "react";

import { useNavigate } from "react-router-dom";

import search from "../../../../assets/search.svg";

import s from "../Header.module.scss";
import SearchCategoryContext from "../../../../Context/SearchCategoryContext";

const SearchSetion = () => {
  const navigate = useNavigate();

  const { setSearchCategory } = useContext(SearchCategoryContext);

  const searchSection = useRef(null);

  const searchCategoryInput = useRef(null);

  const showSearchSectionHandler = () => {
    searchSection.current.style.display = "flex";
  };

  const hideSearchSectionHandler = () => {
    searchSection.current.style.display = "none";
  };

  const unBlurryBackgroundHandler = (e) => {
    e.stopPropagation();
  };

  const searchBehavior = (e) => {
    e.target.value = "";
    searchSection.current.style.display = "none";
    navigate("/");
    const postsElement = document.getElementById("posts");
    postsElement.scrollIntoView({ behavior: "smooth" });
  };

  const categoryKeyHandler = (e) => {
    if (e.key === "Enter") {
      setSearchCategory(e.target.value);
      searchBehavior(e);
    }
  };

  const categoryClickHandler = (e) => {
    const searchValue = searchCategoryInput.current.value;
    setSearchCategory(searchValue);
    searchBehavior(e);
  };

  return (
    <>
      <img
        onClick={showSearchSectionHandler}
        className={s.header__navMenu__search}
        width="20"
        height="20"
        src="https://img.icons8.com/ios/50/000000/search--v1.png"
        alt="search--v1"
      />
      <section
        onClick={hideSearchSectionHandler}
        ref={searchSection}
        className={s.header__searchSection}
      >
        <div
          onClick={unBlurryBackgroundHandler}
          className={s.header__searchSection__searchPlace}
        >
          <input
            ref={searchCategoryInput}
            onKeyDown={categoryKeyHandler}
            placeholder="Enter category"
            type="text"
            name="search"
            className={s.header__searchSection__searchPlace__inp}
          />
          <button
            onClick={categoryClickHandler}
            className={s.header__searchSection__searchPlace__btn}
          >
            <img width="20" height="20" src={search} alt="search--v1" />
          </button>
        </div>
      </section>
    </>
  );
};

export default SearchSetion;
