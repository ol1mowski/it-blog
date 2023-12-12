import { fetchPosts, getImageUrl } from "../../util/http";
import Post from "./Post/Post";
import s from "./PostSection.module.scss";
import { useQuery } from "@tanstack/react-query";

const PostSection = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFnL: fetchPosts,
  });

  const { data: imageData, status: imageStatus } = useQuery({
    queryKey: ["images"],
    queryFn: getImageUrl,
    gcTime: 100000,
    staleTime: 100000,
  });

  const POSTS_DATA = data || [];

  return (
    <main className={s.postsContainer}>
      <section className={s.postsContainer__postsWrapper}>
        {POSTS_DATA.map((item) => (
          <Post
            key={item.id}
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
