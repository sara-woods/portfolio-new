import "./Intro.css";
import Button from "../UI/Button";
import { useTranslation } from "react-i18next";

// import { contentData } from "../../contentData";

import portrait from "../../images/portrait.jpg";

const Intro = (props) => {
  const { t } = useTranslation();

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
            <p className="text-orange text-300 text-lg">
              {/* {props.introData.hello} */}
              {t("intro.hello")}
            </p>
            <h1>Sara Lotfi</h1>
            <p className="text-md text-300 mt-4">{t("intro.introText")}</p>
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

          <Button
            // text={contentData.buttonText.contact}
            text={t("buttonText.contact")}
            href="mailto: lotfi.sara@gmail.com"
            className="contact-button"
          />
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
