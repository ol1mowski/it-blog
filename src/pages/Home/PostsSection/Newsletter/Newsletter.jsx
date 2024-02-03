import s from "./Newsletter.module.scss";

import { useRef, useState } from "react";

import { NewsletterComponent } from "./Newsletter-component/NewsletterComponent";

const Newsletter = () => {
  const newsInp = useRef(null);

  const [isValidate, setIsValidate] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  const validateEmail = (email) => {
    return email.length >= 8 && email.includes("@");
  };

  const validInputHandler = () => {
    const newsEmail = newsInp.current.value;

    if (validateEmail(newsEmail)) {
      setIsValidate(true);
      setErrorInfo("");
      newsInp.current.classList.remove(s.unvalid);
      newsInp.current.value = "";
      newsInp.current.classList.add(s.valid);
    } else {
      setIsValidate(false);
      if (newsEmail.indexOf("@") === -1) {
        setErrorInfo("Your email address must include a @");
      } else if (newsEmail.length < 8) {
        setErrorInfo("Email must be at least 8 characters long");
      }
      newsInp.current.classList.add(s.unvalid);
    }
    zs;
  };

  return (
    <NewsletterComponent
      isValidate={isValidate}
      errorInfo={errorInfo}
      newsInp={newsInp}
      validInputHandler={validInputHandler}
    />
  );
};

export default Newsletter;
