import { useContext, useRef, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';

import { fetchSubpage } from '../../../../util/http';

import SearchCategoryContext from "../../../../Context/SearchCategoryContext";

import HamburgerMenuComponent from "./HamburgerMenuComponent/HamburgerMenuComponent";

const HamburgerMenu = ({ showHamburgerMenu }) => {

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['subpage'],
    queryFn: fetchSubpage,
  })

  const SUBPAGES = data || [];

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
   <HamburgerMenuComponent hamburgerMenu={hamburgerMenu} hideMenuHandler={hideMenuHandler} categoryClickHandler={categoryClickHandler} categoryKeyHandler={categoryKeyHandler} searchCategoryInput={searchCategoryInput} SUBPAGES={SUBPAGES}/>
  );
};

export default HamburgerMenu;
