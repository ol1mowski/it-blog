import s from "../PostsStyle/PostSection.module.scss";
import Loading from '../../../Components/UI/Loading';


const Post = ({title, category, description, image, isLoading}) => {


  return (
    <div className={s.postsContainer__postsWrapper__post}>
      {isLoading ? <Loading /> : <><img className={s.postsContainer__postsWrapper__post__img} src={image} alt="" />
        <p className={s.postsContainer__postsWrapper__post__category}>{category}</p>
        <h3 className={s.postsContainer__postsWrapper__post__title}>{title}</h3>
        <p className={s.postsContainer__postsWrapper__post__text}>{description}</p>
        <p className={s.postsContainer__postsWrapper__post__read}>
        Read more
        </p></> }
       
  </div>
  )
}

export default Post;