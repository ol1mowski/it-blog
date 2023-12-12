import s from "./Newsletter.module.scss";

import img from "../../../assets/technology.jpg";

const Newsletter = () => {
  return (
    <section className={s.newsletterContainer}>
      <div className={s.newsletterContainer__wrapper}>
        <img
          className={s.newsletterContainer__wrapper__img}
          src={img}
          alt="Newsletter encourage image"
        />
        <h2 className={s.newsletterContainer__wrapper__header}>
          Stay Ahead with Frontend Insights!
        </h2>
        <ul className={s.newsletterContainer__wrapper__benefits}>
          <li className={s.newsletterContainer__wrapper__benefit}>
            Latest Trends: Stay In the Loop with the Latest Frontend Trends.
            Discover What's Hot, What's Not, and Which Emerging Technologies Are
            Gaining Popularity.
          </li>
          <li className={s.newsletterContainer__wrapper__benefit}>
            Exclusive Content: Receive Exclusive Articles, Tutorials, and
            Analyses Unavailable Anywhere Else.
          </li>
        </ul>
        <div className={s.newsletterContainer__wrapper__inputSection}>
          <div className={s.newsletterContainer__wrapper__inputSection__inpWrapper}>
            <input
              className={s.newsletterContainer__wrapper__inputSection__inpWrapper__inp}
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <button
              className={s.newsletterContainer__wrapper__inputSection__inpWrapper__btn}
            >
              sign up
            </button>
          </div>
          <div className={s.newsletterContainer__wrapper__inputSection__infoWrapper}>
            <span
              className={s.newsletterContainer__wrapper__inputSection__infoWrapper__content}
            >
              Enter your Email to sign up for the free newsletter
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
