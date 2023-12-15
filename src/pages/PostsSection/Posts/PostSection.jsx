import CategoryContext from "../../../Context/categoryContext";
import Post from "../Post/Post";
import s from "../PostsStyle/PostSection.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "../../../util/http";
import SearchCategoryContext from "../../../Context/SearchCategoryContext";

const PostSection = () => {
  const [postData, setPostData] = useState([]);

  const { currentCategory, setCurrentCategory } = useContext(CategoryContext);

  const { searchCategory } = useContext(SearchCategoryContext);

  const [found, setFound] = useState(true);

  const { data } = useQuery({
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
        if (searchCategory !== '') {
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
    <main className={s.postsContainer}>
      <section className={s.postsContainer__postsWrapper}>
        {found === true ? (
          postData.map((item) => (
            <Post
              key={item.id}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <h1>Category no found</h1>
        )}
      </section>
    </main>
  );
};

export default PostSection;
