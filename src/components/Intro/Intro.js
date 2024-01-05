import "./Intro.css";
import Button from "../UI/Button";

import portrait from "../../images/portrait.jpg";

const Intro = () => {
  const handleRightClick = (event) => {
    event.preventDefault();
  };

  const handleDrag = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div id="intro-container">
        <div id="intro">
          <div className="intro-left">
            <p className="text-orange text-300 text-lg">Hi, my name is</p>
            <h1>Sara Woods</h1>
            <p className="text-md text-300 mt-4">I’m a web developer, web designer and illustrator based in Sweden. Below are websites that I have designed and developed as well as a selection of my illustrations and logo designs.</p>
            <Button
              text={"Get in touch"}
              href="mailto: hello@sarawoodsdesign.com"
              className="contact-button-screen"
            />
          </div>

          <img
            onContextMenu={handleRightClick}
            onDragStart={handleDrag}
            id="portrait"
            src={portrait}
            alt="Sara Woods portrait"
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button
            text={"Get in touch"}
            href="mailto: hello@sarawoodsdesign.com"
            className="contact-button"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
