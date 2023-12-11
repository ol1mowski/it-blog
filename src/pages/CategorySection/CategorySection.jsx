import s from './CategorySection.module.scss';

const CategorySection = () => {
    return (
        <section className={s.categoryContainer}>
            <div className={s.categoryContainer__wrapper}>
                <div className={s.categoryContainer__wrapper__itemCategory}>
                    <h2 className={s.categoryContainer__wrapper__itemCategory__content}>
                        Categories:
                    </h2>
                </div>
                <div className={s.categoryContainer__wrapper__item}>
                    <img className={s.categoryContainer__wrapper__item__img} width="50" height="50" src="https://img.icons8.com/bubbles/50/code.png" alt="code" />
                    All
                </div>
                <div className={s.categoryContainer__wrapper__item}>
                    <img className={s.categoryContainer__wrapper__item__img} width="50" height="50" src="https://img.icons8.com/clouds/50/react.png" alt="react" />
                    React
                </div>
                <div className={s.categoryContainer__wrapper__item}>
                    <img className={s.categoryContainer__wrapper__item__img} width="50" height="50" src="https://img.icons8.com/fluency/50/imac-settings.png" alt="imac-settings" />
                    Web Development
                </div>
                <div className={s.categoryContainer__wrapper__item}>
                    <img className={s.categoryContainer__wrapper__item__img} width="50" height="50" src="https://img.icons8.com/clouds/50/apple-tips.png" alt="apple-tips" />
                    Learning Tips
                </div>
            </div>
        </section>
    )
}

export default CategorySection
