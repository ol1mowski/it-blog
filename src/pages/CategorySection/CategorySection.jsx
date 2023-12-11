import { fetchCategory } from '../../util/http';
import Category from './Category/Category';
import s from './CategorySection.module.scss';
import { useQuery } from '@tanstack/react-query';

const CategorySection = () => {

    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategory,
    });


    const CATEGORY_DATA = data || [];

    
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
