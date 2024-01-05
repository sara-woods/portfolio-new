import "./Contact.css";
import Button from "../UI/Button";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="header">Hey there!</h1>
      <p className="text-md text-300 mt-3 text-center">
        {"If you would like to get in contact with me, send me an e-mail at "}
        <a
          href="mailto: hello@sarawoodsdesign.com"
          className="contact-link tab-link"
        >
          hello@sarawoodsdesign.com
        </a>
        {"or message me on "}
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
          text={"Get in touch"}
          href="mailto: hello@sarawoodsdesign.com"
        />
      </div>
    </div>
  );
};

export default Contact;
