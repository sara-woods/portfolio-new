import "./Contact.css";
import Button from "../UI/Button";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact">
      <div id="contact-anchor"></div>
      <h1 className="header">{t("contactData.header")}</h1>
      <p className="text-md text-300 mt-3 text-center">
        {t("contactData.text1")}{" "}
        <a
          href="mailto: lotfi.sara@gmail.com"
          className="contact-link tab-link"
        >
          lotfi.sara@gmail.com{" "}
        </a>
        {t("contactData.text2")}{" "}
        <a
          href="https://www.linkedin.com/in/sara-lotfi/"
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
          href="mailto: lotfi.sara@gmail.com"
        />
      </div>
    </div>
  );
};

export default Contact;
