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
        {!props.caseStudy && <h1>{props.header}</h1>}
        {props.caseStudy && <h1 className="contact-header">{props.header}</h1>}
        {props.caseStudy && <p className="extra-paragraph">Get in touch</p>}
        <a href="mailto: hellosarawoods@gmail.com">
          <p>hellosarawoods@gmail.com</p>
        </a>
      </div>
    </WrapperBackground>
  );
};

export default Contact;
