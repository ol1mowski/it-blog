import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";
import CategoryContext from "./Context/CategoryContext";
import { useState } from "react";
import SearchCategoryContext from "./Context/SearchCategoryContext";
import HomePage from "./pages/HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./pages/Home/Header/Header";
import ReadMore from "./pages/ReadMore/ReadMore";

function App() {
  const [currentCategory, setCurrentCategory] = useState(1);
  const [searchCategory, setSearchCategory] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/:id", element: <ReadMore /> },
      ],
    },
  ]);

  return (
    <>
      <SearchCategoryContext.Provider
        value={{ searchCategory, setSearchCategory }}
      >
        <CategoryContext.Provider
          value={{ currentCategory, setCurrentCategory }}
        >
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </CategoryContext.Provider>
      </SearchCategoryContext.Provider>
    </>
  );
}

export default App;
