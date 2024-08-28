import "./Contact.css";

import WrapperBackground from "../UI/WrapperBackground";

const Contact = (props) => {
  return (
    <WrapperBackground
      backgroundColor={props.backgroundColor}
      id="wrapper-contact"
    >
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
    </WrapperBackground>
  );
};

export default Contact;
