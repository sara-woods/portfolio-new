import "./Intro.css";
import Button from "../UI/Button";
import { useTranslation } from "react-i18next";

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
            <p className="text-orange text-300 text-lg">{t("intro.hello")}</p>
            <h1>Sara Woods</h1>
            <p className="text-md text-300 mt-4">{t("intro.introText")}</p>
            <Button
              text={t("buttonText.contact")}
              href="mailto: hellosarawoods@gmail.com"
              className="contact-button-screen"
            />
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
            text={t("buttonText.contact")}
            href="mailto: hellosarawoods@gmail.com"
            className="contact-button"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
