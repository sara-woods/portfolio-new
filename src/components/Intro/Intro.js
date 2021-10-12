import "./Intro.css";
import Button from "../UI/Button";

import portrait from "../../images/portrait.png";

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
            <h1>Sara Lotfi</h1>
            <p className="text-md text-300 mt-4">
              {/* I’m a full-stack developer and illustrator based in Uppsala, Sweden.
          Most recently I graduated from Le Wagon, a full-time web development
          bootcamp. Here's a few technologies I've worked with:{" "} */}
              I’m a web developer and illustrator based in Uppsala, Sweden.
              Check out some of my previous work below. If you’re looking for a
              freelance web developer, illustrator or designer to help bring an
              idea to life or to fix an existing issue - let’s chat!
            </p>
            {/* <div className="tech-stack text-20px">
          <div>
            <ul className="text-orange">
              <li>
                <span>React</span>
              </li>
              <li>
                <span>JavaScript (ES6+)</span>
              </li>
              <li>
                <span>Ruby on Rails</span>
              </li>
              <li>
                <span>HTML/CSS/Bootstrap</span>
              </li>
              <li>
                <span>Git and GitHub</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-orange">
              <li>
                <span>Heroku</span>
              </li>
              <li>
                <span>JSON</span>
              </li>
              <li>
                <span>APIs</span>
              </li>
              <li>
                <span>SQL</span>
              </li>
              <li>
                <span>Relational databases</span>
              </li>
            </ul>
          </div>
        </div> */}
          </div>
          <a
            href="mailto: lotfi.sara@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <Button text="Get in touch" />
          </a>

          <img
            onContextMenu={handleRightClick}
            onDragStart={handleDrag}
            id="portrait"
            src={portrait}
            alt="Sara Lotfi portrait"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
