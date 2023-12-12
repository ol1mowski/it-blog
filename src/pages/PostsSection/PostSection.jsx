import Post from "./Post/Post";
import s from "./PostSection.module.scss";

const PostSection = () => {
  return (
    <main className={s.postsContainer}>
      <section className={s.postsContainer__postsWrapper}>
       <Post />
      </section>
    </main>
  );
};

export default PostSection;
