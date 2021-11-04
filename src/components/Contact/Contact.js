import "./Contact.css";
import Button from "../UI/Button";
import { contentData } from "../../contentData";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="header">{contentData.contactData.header}</h1>
      <p className="text-md text-300 mt-3 text-center">
        {contentData.contactData.text[0]}{" "}
        <a
          href="mailto: lotfi.sara@gmail.com"
          className="contact-link tab-link"
        >
          lotfi.sara@gmail.com{" "}
        </a>
        {contentData.contactData.text[1]}{" "}
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
          text={contentData.buttonText.contact}
          href="mailto: lotfi.sara@gmail.com"
        />
      </div>
    </div>
  );
};

export default Contact;
