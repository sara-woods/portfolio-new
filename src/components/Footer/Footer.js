import "./Footer.css";

import ColorBackground from "../UI/ColorBackground";

const Footer = (props) => {
  return (
    <ColorBackground backgroundColor={props.backgroundColor}>
      <div className={`footer main-container ${props.className}`}>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/hellosarawoods/"
            target="_blank"
            rel="noopener noreferrer"
            className="tab-link p-body"
          >
            <p className="">LinkedIn</p>
          </a>
          <a
            href="https://github.com/sara-woods"
            target="_blank"
            rel="noopener noreferrer"
            className="tab-link"
          >
            <p className="">GitHub</p>
          </a>
        </div>
        <p className="copyright">©2024 Sara Woods</p>
      </div>
    </ColorBackground>
  );
};

export default Footer;
