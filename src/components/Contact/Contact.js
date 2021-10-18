import "./Contact.css";
import Button from "../UI/Button";
import { contentData } from "../../contentData";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="header">{contentData.contactData.header}</h1>
      <p className="text-md text-300 mt-3 text-center">
        {contentData.contactData.text[0]}{" "}
        <a href="mailto: lotfi.sara@gmail.com">lotfi.sara@gmail.com </a>
        {contentData.contactData.text[1]}{" "}
        <a
          href="https://www.linkedin.com/in/sara-lotfi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
      <a
        href="mailto: lotfi.sara@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center d-block"
      >
        <Button className="mt-5" text={contentData.buttonText.contact} />
      </a>
    </div>
  );
};

export default Contact;
