import { memo, useEffect, useRef, useState } from "react";
import s from "../Slider.module.scss";
import { Link } from "react-router-dom";

const SliderComponent = memo(({ data }) => {
  const slidesRefs = Array.from({ length: 3 }, () => useRef(null));
  const [index, setIndex] = useState(0);

  const changeSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  useEffect(() => {
    const handleSlideChange = (index) => {
      setIndex(index);
    };

    const attachEventListeners = () => {
      slidesRefs.forEach((slide, index) => {
        const changeSlideHandler = () => handleSlideChange(index);
        slide.current.addEventListener("click", changeSlideHandler);
      });
    };

    const detachEventListeners = () => {
      slidesRefs.forEach((slide, index) => {
        const changeSlideHandler = () => handleSlideChange(index);
        slide.current.removeEventListener("click", changeSlideHandler);
      });
    };

    attachEventListeners();

    return () => {
      detachEventListeners();
    };
  }, [slidesRefs]);

  useEffect(() => {
    const intervalId = setInterval(changeSlide, 5000);

    return () => clearInterval(intervalId);
  }, [index, data]);

  const renderImage = () => (
    <img
      src={data[index].image}
      draggable="false"
      loading="lazy"
      alt="post image"
      className={s.sliderContainer__image__img}
    />
  );

  return (
    <>
      <main className={s.sliderContainer}>
        <div className={s.sliderContainer__image}>
          {renderImage()}
        </div>
        <div className={s.sliderContainer__content}>
          <p className={s.sliderContainer__content__category}>{data[index].category}</p>
          <h2 className={s.sliderContainer__content__title}>{data[index].title}</h2>
          <h3 className={s.sliderContainer__content__text}>{data[index].description}</h3>
          <Link to={`/${data[index].category}`}>
            <p className={s.sliderContainer__content__read}>Read more</p>
          </Link>
        </div>
      </main>
      <section className={s.sliderContainer__sliderDots}>
        {slidesRefs.map((slideRef, i) => (
          <div
            key={i}
            ref={slideRef}
            className={`${s.sliderContainer__sliderDots__dot} ${
              index === i ? s.sliderContainer__sliderDots__dot__active : ""
            }`}
          ></div>
        ))}
      </section>
    </>
  );
});

export default SliderComponent;