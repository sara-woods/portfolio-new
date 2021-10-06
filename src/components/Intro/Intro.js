import "./Intro.css";
import Button from "../UI/Button";

const Intro = () => {
  return (
    <div id="intro">
      <p className="text-orange text-300 text-lg">Hi, my name is</p>
      <h1>Sara Lotfi</h1>
      <p className="text-md text-300 mt-3 mb-4">
        I’m a full-stack developer and illustrator based in Uppsala, Sweden.
        Most recently I graduated from Le Wagon, a full-time web development
        bootcamp. Here's a few technologies I've worked with:{" "}
      </p>
      <div className="tech-stack text-20px">
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
      </div>
      <a
        href="mailto: lotfi.sara@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button text="Get in touch" />
      </a>
    </div>
  );
};

export default Intro;
