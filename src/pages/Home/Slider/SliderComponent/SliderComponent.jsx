import { memo, useEffect, useRef, useState } from "react";
import s from "../Slider.module.scss";

const SliderComponent = memo(({ data }) => {
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);

  const [category, setCategory] = useState(data[0].category);
  const [title, setTitle] = useState(data[0].title);
  const [description, setDescription] = useState(data[0].description);
  const [image, setImage] = useState(data[0].image);

  const [index, setIndex] = useState(0);

  const changeSlide = () => {
    if (index >= 2) {
      setIndex(0);
    } else if (index >= 0) {
      setIndex((prev) => (prev + 1) % data.length);
    }
  };

  useEffect(() => {
    const handleSlideChange = (index) => {
      setIndex(index);
    };

    const slides = [slide1, slide2, slide3];

    slides.forEach((slide, index) => {
      const changeSlideHandler = () => handleSlideChange(index);
      slide.current.addEventListener("click", changeSlideHandler);
    });

    return () => {
      slides.forEach((slide, index) => {
        const changeSlideHandler = () => handleSlideChange(index);
        slide.current.removeEventListener("click", changeSlideHandler);
      });
    };
  }, [slide1, slide2, slide3]);

  useEffect(() => {
    setCategory(data[index].category);
    setDescription(data[index].description);
    setTitle(data[index].title);
    setImage(data[index].image);
  }, [index, data]);

  useEffect(() => {
    const intervalId = setInterval(changeSlide, 5000);

    return () => clearInterval(intervalId);
  }, [index, data]);

  return (
    <>
      <main className={s.sliderContainer}>
        <div className={s.sliderContainer__image}>
          {index === 0 ? (
            <img
              src={image}
              draggable="false"
              loading="lazy"
              alt="post image"
              className={s.sliderContainer__image__img}
            />
          ) : null}
          {index === 1 ? (
            <img
              src={image}
              draggable="false"
              loading="lazy"
              alt="post image"
              className={s.sliderContainer__image__img}
            />
          ) : null}
          {index === 2 ? (
            <img
              src={image}
              draggable="false"
              loading="lazy"
              alt="post image"
              className={s.sliderContainer__image__img}
            />
          ) : null}
        </div>
        <div className={s.sliderContainer__content}>
          <p className={s.sliderContainer__content__category}>{category}</p>
          <h2 className={s.sliderContainer__content__title}>{title}</h2>
          <h3 className={s.sliderContainer__content__text}>{description}</h3>
          <p className={s.sliderContainer__content__read}>Read more</p>
        </div>
      </main>
      <section className={s.sliderContainer__sliderDots}>
        <div
          ref={slide1}
          className={
            index === 0
              ? `${s.sliderContainer__sliderDots__dot} ${s.sliderContainer__sliderDots__dot__active}`
              : `${s.sliderContainer__sliderDots__dot}`
          }
        ></div>
        <div
          ref={slide2}
          className={
            index === 1
              ? `${s.sliderContainer__sliderDots__dot} ${s.sliderContainer__sliderDots__dot__active}`
              : `${s.sliderContainer__sliderDots__dot}`
          }
        ></div>
        <div
          ref={slide3}
          className={
            index === 2
              ? `${s.sliderContainer__sliderDots__dot} ${s.sliderContainer__sliderDots__dot__active}`
              : `${s.sliderContainer__sliderDots__dot}`
          }
        ></div>
      </section>
    </>
  );
});

export default SliderComponent;
