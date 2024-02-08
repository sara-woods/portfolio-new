import "./Footer.css";
import WrapperBackground from "../UI/WrapperBackground";

const Footer = () => {
  return (
    <WrapperBackground id="footer-wrapper" backgroundColor="#f2f2f2">

    <div className="footer main-container">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/hellosarawoods/"
          target="_blank"
          rel="noopener noreferrer"
          className="tab-link"
        >
          <p className="">
            LinkedIn
          </p>
        </a>
        <a
          href="https://github.com/sara-woods"
          target="_blank"
          rel="noopener noreferrer"
          className="tab-link"
          >
          <p className="">
            GitHub
          </p>
        </a>
      </div>
      <p className="copyright">© 2024 Sara Woods</p>
    </div>
          </WrapperBackground>
  );
};

export default Footer;
