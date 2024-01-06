import { QueryClientProvider } from "@tanstack/react-query";
import { fetchSubpage, queryClient } from "./util/http";
import CategoryContext from "./Context/CategoryContext";
import { useState } from "react";
import SearchCategoryContext from "./Context/SearchCategoryContext";
import HomePage from "./pages/Home/HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./pages/Home/Header/Header";
import ReadMore, { readMoreLoader } from "./pages/ReadMore/ReadMore";
import SubpageHeader from "./pages/SubpageHeader/SubpageHeader";

function App() {
  const [currentCategory, setCurrentCategory] = useState(1);
  const [searchCategory, setSearchCategory] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/:id", element: <ReadMore />, loader: readMoreLoader },
        { path: "/recommended", element: <SubpageHeader id={'recommended'}/>, loader: fetchSubpage},
        { path: "/books", element: <SubpageHeader id={'books'}/>, loader: fetchSubpage},
        { path: "/author", element: <SubpageHeader id={'author'}/>, loader: fetchSubpage},
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
