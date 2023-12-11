import Home from "./pages/Home/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";
import CategorySection from "./pages/CategorySection/CategorySection";
import CategoryContext from "./Context/CategoryContext";
import { useState } from "react";

function App() {
  const [currentCategory, setCurrentCategory] = useState(null);

  return (
    <>
      <CategoryContext.Provider value={{  currentCategory, setCurrentCategory}}>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
        <CategorySection />
      </CategoryContext.Provider>
    </>
  );
}

export default App;
