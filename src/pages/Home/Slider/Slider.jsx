import s from "./Slider.module.scss";

import { fetchPosts, getImageUrl } from '../../../util/http';
import { useQuery } from '@tanstack/react-query';

const Slider = () => {


  const { data, status, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const { data: imageData, status: imageStatus  } = useQuery({
    queryKey: ['images'],
    queryFn: getImageUrl,
  })


  if (isError) {
    throw error.message
  }

  if (status === 'success' && imageStatus === 'success') {
    const first = data[0]
    const {category, title, description} = first;
    return (
      <main className={s.sliderContainer}>
        <div className={s.sliderContainer__image}>
          <img src={imageData} alt="wd" className={s.sliderContainer__image__img} />
        </div>
        <div className={s.sliderContainer__content}>
          <p className={s.sliderContainer__content__category}>{category}</p>
          <h2 className={s.sliderContainer__content__title}>{title}</h2>
          <h3 className={s.sliderContainer__content__text}>
            {description}
          </h3>
          <p className={s.sliderContainer__content__read}>Read more</p>
        </div>
      </main>
    )
  }


  return (
   <h1>loading</h1>
  );
};

export default Slider;
