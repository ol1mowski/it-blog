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
        break;
      case "web development":
        setCurrentCategory(3);
        break;
      case "Learn Tips":
        setCurrentCategory(4);
        break;
      default:
        console.log('category no found');
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
        {postData.map((item) => (
          <Post
            key={item.id}
            image={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </main>
  );
};

export default PostSection;
