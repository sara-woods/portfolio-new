import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { contentData } from "../../contentData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <a
          href="https://github.com/saralotfi"
          target="_blank"
          rel="noopener noreferrer"
          className="tab-link"
        >
          <p className="text-orange text-md">
            <FontAwesomeIcon icon={faGithubSquare} />
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/sara-lotfi/"
          target="_blank"
          rel="noopener noreferrer"
          className="tab-link"
        >
          <p className="text-orange text-md">
            <FontAwesomeIcon icon={faLinkedin} />
          </p>
        </a>
      </div>
      <p className="text-orange mb-5 mt-4">{contentData.copyright}</p>
    </div>
  );
};

export default Footer;
