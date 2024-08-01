import "./Intro.css";

const Intro = () => {
  return (
    <div className="main-container">
      <div className="intro-container">
        <div className="intro-top">
          {/* <img className="logo" src={logo} alt="Sara Woods logo"/> */}
          <p>
            Hi! I’m Sara Woods — <br></br>
            UI & UX designer, illustrator and developer.
          </p>
        </div>
        {/* <div className="intro-bottom">
            <p>Based in Sweden</p>
            <div className="intro-email">
              <p>Get in touch</p>
              <a href="mailto: sarawoodsdesign@gmail.com"><p>sarawoodsdesign@gmail.com</p></a>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Intro;
