import s from "./Slider.module.scss";
import img from "../../../assets/img.jpg";

const Slider = () => {
  return (
    <main className={s.sliderContainer}>
      <div className={s.sliderContainer__image}>
        <img src={img} alt="wd" className={s.sliderContainer__image__img} />
      </div>
      <div className={s.sliderContainer__content}>
        <p className={s.sliderContainer__content__category}>React</p>
        <h2 className={s.sliderContainer__content__title}>How to start learn react in 2023 ?</h2>
        <h3 className={s.sliderContainer__content__text}>
        In this post you will find the necessary information on how to learn React in 2023
        </h3>
        <p className={s.sliderContainer__content__read}>Read more</p>
      </div>
    </main>
  );
};

export default Slider;
