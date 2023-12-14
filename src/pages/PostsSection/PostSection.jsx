import CategoryContext from "../../Context/categoryContext";
import { fetchPosts, getImageUrl } from "../../util/http";
import Newsletter from "./Newsletter/Newsletter";
import Post from "./Post/Post";
import s from "./PostSection.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";

const PostSection = () => {
  const [postData, setPostData] = useState([]);

  const { currentCategory } = useContext(CategoryContext);

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
      <Newsletter />
    </main>
  );
};

export default PostSection;
