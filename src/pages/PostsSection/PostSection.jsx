import { fetchPosts, getImageUrl } from "../../util/http";
import Newsletter from "./Newsletter/Newsletter";
import Post from "./Post/Post";
import s from "./PostSection.module.scss";
import { useQuery } from "@tanstack/react-query";

const PostSection = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFnL: fetchPosts,
  });

  const POSTS_DATA = data || [];

  return (
    <main className={s.postsContainer}>
      <section className={s.postsContainer__postsWrapper}>
        {POSTS_DATA.map((item) => (
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
