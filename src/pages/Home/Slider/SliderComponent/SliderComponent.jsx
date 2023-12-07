import s from "../Slider.module.scss";


const SliderComponent = ({ title, category, images, description }) => {
    return (
        <>
            <main className={s.sliderContainer}>
                <div className={s.sliderContainer__image}>
                    <img src={images[1]} alt="post image" className={s.sliderContainer__image__img} />
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
            <section className={s.sliderContainer__sliderDots}>
                <div className={`${s.sliderContainer__sliderDots__dot} ${s.sliderContainer__sliderDots__dot__active}`}></div>
                <div className={s.sliderContainer__sliderDots__dot}></div>
                <div className={s.sliderContainer__sliderDots__dot}></div>
            </section>
        </>
    )
}

export default SliderComponent
