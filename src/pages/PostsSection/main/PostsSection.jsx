import s from './Posts.module.scss';

import PostSection from '../Posts/PostSection'
import Newsletter from '../Newsletter/Newsletter';

const PostsSection = () => {
  return (
    <section id='posts' className={s.container}>
        <PostSection />
        <Newsletter />
    </section>
  )
}

export default PostsSection
