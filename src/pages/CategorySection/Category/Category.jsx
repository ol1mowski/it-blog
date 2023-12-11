import s from '../CategorySection.module.scss';

const Category = ({name, image}) => {
    return (
        <div className={s.categoryContainer__wrapper__item}>
            <img className={s.categoryContainer__wrapper__item__img} width="50" height="50" src={image} alt="code" />
            {name}
        </div>
    );
};

export default Category;
