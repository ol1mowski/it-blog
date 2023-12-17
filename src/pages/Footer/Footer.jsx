import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footerContainer}>
      <section className={s.footerContainer__name}>
        <div className={s.footerContainer__name__wrapper}>
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/programming-flag.png"
            alt="programming-flag"
          />
          <h3 className={s.footerContainer__name__wrapper__h3}>It-blog for programmers.com</h3>
        </div>
      </section>
      <section className={s.footerContainer__navigation}></section>
    </footer>
  );
};

export default Footer;
