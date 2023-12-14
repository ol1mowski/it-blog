import Home from "./pages/Home/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";
import CategorySection from "./pages/CategorySection/CategorySection";
import CategoryContext from "./Context/CategoryContext";
import { useState } from "react";
import PostsSection from "./pages/PostsSection/main/PostsSection";
import SearchCategoryContext from "./Context/SearchCategoryContext";

function App() {
  const [currentCategory, setCurrentCategory] = useState(1);
  const [searchCategory, setSearchCategory] = useState('All');


  return (
    <>
      <SearchCategoryContext.Provider value={{searchCategory, setSearchCategory}}>
        <CategoryContext.Provider
          value={{ currentCategory, setCurrentCategory }}
        >
          <QueryClientProvider client={queryClient}>
            <Home />
            <CategorySection />
            <PostsSection />
          </QueryClientProvider>
        </CategoryContext.Provider>
      </SearchCategoryContext.Provider>
    </>
  );
}

export default App;
