import "./Contact.css";

import WrapperBackground from "../UI/WrapperBackground";

const Contact = () => {
  return (
    <WrapperBackground backgroundColor="#f2f2f2" id="wrapper-contact">
      <div className="main-container" id="scroll-contact">
        <h1>Let's connect</h1>
        <a href="mailto: hello@sarawoodsdesign.com"><p>hellosarawoods@gmail.com</p></a>
      </div>
    </WrapperBackground>
  );
};

export default Contact;
