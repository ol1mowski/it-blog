import { useQuery } from '@tanstack/react-query';
import s from './Header.module.scss';
import { fetchPosts } from '../../../util/http';



const Header = () => {

  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  console.log(data);

  return (
    <header className={s.header}>
      <section className={s.header__titleSection}>
        <img width="45" height="45" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/programming-flag.png" alt="programming-flag" />
        <h2 className={s.header__h2}>
          IT-Blog
        </h2>
      </section>
      <section className={s.header__navMenu}>
        <div className={s.header__navMenu__nav}>
          <ul className={s.header__navMenu__items}>
            <li className={s.header__navMenu__items__item}>Blog’s goal</li>
            <li className={s.header__navMenu__items__item}>About Author</li>
          </ul>
        </div>
        <img width="20" height="20" src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="search--v1" />
      </section>
      <section className={s.header__hamburgerSection}>
        <img width="45" height="45" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/menu-squared-2.png" alt="menu-squared-2" />
      </section>
    </header>
  );
};

export default Header;
