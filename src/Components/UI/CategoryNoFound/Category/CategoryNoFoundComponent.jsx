import s from './CategoryNoFoundComponent.module.scss';

const CategoryNoFoundComponent = ({ category }) => {
  return <div className={s.categoryWrapper}>{category}</div>;
};

export default CategoryNoFoundComponent;
