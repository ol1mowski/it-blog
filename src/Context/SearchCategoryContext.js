import { createContext } from "react";

const SearchCategoryontext = createContext({
    searchCategory: null,
    setSearchCategory: () => {},
});

export default SearchCategoryontext;