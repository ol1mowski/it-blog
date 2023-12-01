import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <section className={s.header__titleSection}>
        <img width="45" height="45" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/programming-flag.png" alt="programming-flag" />
        <h2 className={s.header__h2}>
          IT-Blog
        </h2>
      </section>
      <section className={s.header__hamburgerSection}>
        <img width="45" height="45" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/menu-squared-2.png" alt="menu-squared-2" />
      </section>
    </header>
  )
}

export default Header
