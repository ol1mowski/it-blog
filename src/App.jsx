import Home from "./pages/Home/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";
import CategorySection from "./pages/CategorySection/CategorySection";
import CategoryContext from "./Context/CategoryContext";
import { useState } from "react";
import PostsSection from "./pages/PostsSection/main/PostsSection";

function App() {
  const [currentCategory, setCurrentCategory] = useState(1);

  return (
    <>
      <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
        <QueryClientProvider client={queryClient}>
          <Home />
          <CategorySection />
          <PostsSection />
        </QueryClientProvider>
      </CategoryContext.Provider>
    </>
  );
}

export default App;
