import CategoryContext from '../../../../Context/categoryContext';
import s from './CategoryNoFoundComponent.module.scss';
import { useContext } from 'react';


const CategoryNoFoundComponent = ({ category, id }) => {

    const { setCurrentCategory } = useContext(CategoryContext);


    const setCategoryHandler = () => {
        setCurrentCategory(+id);
    }

  return <div onClick={setCategoryHandler} className={s.categoryWrapper}>{category}</div>;
};

export default CategoryNoFoundComponent;
