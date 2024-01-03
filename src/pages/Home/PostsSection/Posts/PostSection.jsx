import CategoryContext from "../../../../Context/categoryContext";
import Post from "../Post/Post";
import s from "../PostsStyle/PostSection.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "../../../../util/http";
import SearchCategoryContext from "../../../../Context/SearchCategoryContext";
import Newsletter from "../Newsletter/Newsletter";
import Loading from "../../../../Components/UI/Loading/Loading";
import Error from "../../../../Components/UI/Error/Error";
import CategoryNoFound from "../../../../Components/UI/CategoryNoFound/CategoryNoFound";

const PostSection = () => {
  const [postData, setPostData] = useState([]);

  const { currentCategory, setCurrentCategory } = useContext(CategoryContext);

  const { searchCategory } = useContext(SearchCategoryContext);

  const [found, setFound] = useState(true);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFnL: fetchPosts,
  });

  useEffect(() => {
    if (data) {
      setPostData(data);
    }
  }, [data]);

  useEffect(() => {
    switch (searchCategory.toLowerCase()) {
      case "react":
        setCurrentCategory(2);
        setFound(true);
        break;
      case "web development":
        setCurrentCategory(3);
        setFound(true);
        break;
      case "learn tips":
        setCurrentCategory(4);
        setFound(true);
        break;
      default:
        if (searchCategory !== "") {
          setCurrentCategory(0);
          setFound(false);
        }
    }
  }, [searchCategory]);

  useEffect(() => {
    if (data) {
      switch (+currentCategory) {
        case 1:
          setPostData(data);
          break;
        case 2:
          const filterReactData = data.filter(
            (item) => item.category === "React"
          );
          setPostData(filterReactData);
          break;
        case 3:
          const filterDevData = data.filter(
            (item) => item.category === "Web Development"
          );
          setPostData(filterDevData);
          break;
        case 4:
          const filterTipsData = data.filter(
            (item) => item.category === "Learn Tips"
          );
          setPostData(filterTipsData);
          break;
        default:
          setPostData(data);
      }
    }
  }, [currentCategory]);

  return (
    <main id="posts" className={s.postsContainer}>
      <section className={s.postsContainer__postsWrapper}>
        {isError ? (
          <Error message={error.message} />
        ) : isLoading ? (
          <Loading />
        ) : found || currentCategory !== 0 ? (
          postData.map((item) => (
            <Post
              isLoading={isLoading}
              key={item.id}
              id={item.id}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <CategoryNoFound />
        )}
      </section>
      <Newsletter />
    </main>
  );
};

export default PostSection;
