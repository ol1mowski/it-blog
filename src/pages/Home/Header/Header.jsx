
import s from './Header.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';

const Header = () => {

  const showHamburgerMenu = useRef(null);
  const hamburgerMenu = useRef(null);
  const navigationSection = useRef(null);
  const closeHamburgerMenu = useRef(null);
  

  useEffect(() => { 

    const showMenuHandler = () => {
      hamburgerMenu.current.style.display='block';
      showHamburgerMenu.current.style.display='none';
      navigationSection.current.style.display='none';
    }

    showHamburgerMenu.current.addEventListener('click', showMenuHandler);

    return(() => {
      showHamburgerMenu.current.removeEventListener('click', showMenuHandler);
    })

  }, [showHamburgerMenu])

  useEffect(() => { 

    const hideMenuHandler = () => {
      hamburgerMenu.current.style.display='none';
      showHamburgerMenu.current.style.display='block';
      navigationSection.current.style.display='flex';
    }

    closeHamburgerMenu.current.addEventListener('click', hideMenuHandler);

    return(() => {
      closeHamburgerMenu.current.removeEventListener('click', hideMenuHandler);
    })

  }, [closeHamburgerMenu])


  return (
    <>
    
    <header ref={navigationSection} className={s.header}>
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
      <section ref={showHamburgerMenu} className={s.header__hamburgerSection}>
        <img width="45" height="45" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/menu-squared-2.png" alt="menu-squared-2" />
      </section>



    </header>
          <menu ref={hamburgerMenu} className={s.header__hamburgerMenu}>

          <section ref={closeHamburgerMenu} className={s.header__hamburgerMenu__close}>
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete-sign"/>
          </section>
    
          </menu>
    </>
  );
};

export default Header;
