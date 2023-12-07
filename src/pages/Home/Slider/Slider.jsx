import s from "./Slider.module.scss";

import loadingIcon from '../../../assets/loading_icon.gif';

import { fetchPosts, getImageUrl } from '../../../util/http';
import { useQuery } from '@tanstack/react-query';
import SliderComponent from "./SliderComponent/SliderComponent";

const Slider = () => {


  const { data, status, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const { data: imageData, status: imageStatus } = useQuery({
    queryKey: ['images'],
    queryFn: getImageUrl,
  })



  if (isError) {
    console.error('Error fetching posts:', error);
    throw error.message;
  }


  if (status === 'success' && imageStatus === 'success' && imageData && data) {
    const contentData = data;

    const images = [imageData[0], imageData[1]];

    const { category, title, description } = contentData[0];
    return (
      <SliderComponent category={category} title={title} description={description} images={images} />
    )
  }


  return (
    <main className={s.sliderContainer}>
      <img src={loadingIcon} alt="loading Icon" />
    </main>
  );
};

export default Slider;
