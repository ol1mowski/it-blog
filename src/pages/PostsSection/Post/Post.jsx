import s from "../PostSection.module.scss";


const Post = () => {
  return (
    <div className={s.postsContainer__postsWrapper__post}>
        <img className={s.postsContainer__postsWrapper__post__img} src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" />
        <p className={s.postsContainer__postsWrapper__post__category}>Category</p>
        <h3 className={s.postsContainer__postsWrapper__post__title}>Title</h3>
        <p className={s.postsContainer__postsWrapper__post__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam odio repellat a neque. Nemo, incidunt facere similique ab corrupti dicta iure vitae illum error, recusandae perferendis, doloribus aliquam nulla?</p>
        <p className={s.postsContainer__postsWrapper__post__read}>
        Read more
        </p>
  </div>
  )
}

export default Post;