import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";


import SearchCategoryContext from "../../../../Context/SearchCategoryContext";
import SearchComponent from "./SearchComponent/SearchComponent";

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
    navigate("#home");
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
    <SearchComponent
      showSearchSectionHandler={showSearchSectionHandler}
      hideSearchSectionHandler={hideSearchSectionHandler}
      unBlurryBackgroundHandler={unBlurryBackgroundHandler}
      categoryClickHandler={categoryClickHandler}
      categoryKeyHandler={categoryKeyHandler}
      searchSection={searchSection}
      searchCategoryInput={searchCategoryInput}
    />
  );
};

export default SearchSetion;
