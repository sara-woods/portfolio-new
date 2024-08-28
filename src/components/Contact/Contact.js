import "./Contact.css";

import ColorBackground from "../UI/ColorBackground";

const Contact = (props) => {
  return (
    <ColorBackground backgroundColor={props.backgroundColor}>
      <div
        className={`main-container ${props.className} contact-container`}
        id="scroll-contact"
      >
        <p>Have a project in mind?</p>
        <h1>LET'S CHAT</h1>
        <a href="mailto: sarawoodsdesign@gmail.com">
          <p className="email">sarawoodsdesign@gmail.com</p>
        </a>
      </div>
    </ColorBackground>
  );
};

export default Contact;
