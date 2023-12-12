import s from "../PostSection.module.scss";


const Post = ({title, category, description, image}) => {
  return (
    <div className={s.postsContainer__postsWrapper__post}>
        <img className={s.postsContainer__postsWrapper__post__img} src={image} alt="" />
        <p className={s.postsContainer__postsWrapper__post__category}>{category}</p>
        <h3 className={s.postsContainer__postsWrapper__post__title}>{title}</h3>
        <p className={s.postsContainer__postsWrapper__post__text}>{description}</p>
        <p className={s.postsContainer__postsWrapper__post__read}>
        Read more
        </p>
  </div>
  )
}

export default Post;