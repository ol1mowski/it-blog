import Category from './Category/Category';
import s from './CategorySection.module.scss';

const CategorySection = () => {

    const CATEGORY_DATA = [
        {
            id: 1,
            name: 'All',
            image: 'https://img.icons8.com/bubbles/50/code.png',
        },
        {
            id: 2,
            name: 'React',
            image: 'https://img.icons8.com/clouds/50/react.png',
        },
        {
            id: 3,
            name: 'Web Development',
            image: 'https://img.icons8.com/fluency/50/imac-settings.png',
        },
        {
            id: 4,
            name: 'Learning Tips',
            image: 'https://img.icons8.com/clouds/50/apple-tips.png',
        },

    ]
    return (
        <section className={s.categoryContainer}>
            <div className={s.categoryContainer__wrapper}>
                <div className={s.categoryContainer__wrapper__itemCategory}>
                    <h2 className={s.categoryContainer__wrapper__itemCategory__content}>
                        Categories:
                    </h2>
                </div>
                {CATEGORY_DATA.map(item => <Category key={item.id} id={item.id} name={item.name} image={item.image} />)}
            </div>
        </section>
    );
};

export default CategorySection;
