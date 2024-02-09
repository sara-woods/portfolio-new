import "./Contact.css";

import WrapperBackground from "../UI/WrapperBackground";

const Contact = (props) => {
  return (
    <WrapperBackground
      backgroundColor={props.backgroundColor}
      id="wrapper-contact"
    >
      <div className="main-container" id="scroll-contact">
        <h1>Let's connect</h1>
        {props.caseStudy && <p className="font-1-5rem">Get in touch</p>}
        <a href="mailto: hello@sarawoodsdesign.com">
          <p>hellosarawoods@gmail.com</p>
        </a>
      </div>
    </WrapperBackground>
  );
};

export default Contact;
