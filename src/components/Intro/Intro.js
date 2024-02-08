import "./Intro.css";

// import logo from "../../images/logo2.png";

const Intro = () => {
  // const handleRightClick = (event) => {
  //   event.preventDefault();
  // };

  // const handleDrag = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className="main-container">
      <div className="intro-container">
          <div className="intro-top">
            {/* <img className="logo" src={logo} alt="Sara Woods logo"/> */}
            <p>Hi! I’m Sara Woods — <br></br>
              UX/UI designer with coding experience and a love for illustration.</p>
          </div>
          <div className="intro-bottom">
            <p>Based in Sweden</p>
            <div className="intro-email">
              <p>Get in touch</p>
              <a href="mailto: hello@sarawoodsdesign.com"><p>hellosarawoods@gmail.com</p></a>
            </div>
          </div>

          {/* <img
            onContextMenu={handleRightClick}
            onDragStart={handleDrag}
            id="portrait"
            src={portrait}
            alt="Sara Woods portrait"
          /> */}

        {/* <div className="d-flex justify-content-center">
          <Button
            text={"Get in touch"}
            href="mailto: hello@sarawoodsdesign.com"
            className="contact-button"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
