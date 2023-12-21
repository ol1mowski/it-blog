import { useParams, useLoaderData } from 'react-router-dom';

import s from './ReadMore.module.scss';
import { fetchPosts } from '../../util/http';

const ReadMore = () => {
 
    const { id } = useParams();

    const fetchData = useLoaderData();

    const { image, title, description } = fetchData.filter(item => item.category === id)[0];


  return (
    <section className={s.container}>
      <img src={image} alt="main image of post" />
    </section>
  )
}

export default ReadMore

export const readMoreLoader = async () => {

  const data = await fetchPosts();

  return data;
}