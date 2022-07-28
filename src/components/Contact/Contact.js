import "./Contact.css";
import Button from "../UI/Button";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact">
      <h1 className="header">{t("contactData.header")}</h1>
      <p className="text-md text-300 mt-3 text-center">
        {t("contactData.text1")}{" "}
        <a
          href="mailto: hellosarawoods@gmail.com"
          className="contact-link tab-link"
        >
          hellosarawoods@gmail.com{" "}
        </a>
        {t("contactData.text2")}{" "}
        <a
          href="https://www.linkedin.com/in/hellosarawoods/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link tab-link"
        >
          LinkedIn
        </a>
        .
      </p>

      <div className="d-flex justify-content-center">
        <Button
          text={t("buttonText.contact")}
          href="mailto: hellosarawoods@gmail.com"
        />
      </div>
    </div>
  );
};

export default Contact;
