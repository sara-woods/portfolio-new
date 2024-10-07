import "./About.css";

import avatarImage from "../../images/avatar.png";
import ColorBackground from "../UI/ColorBackground";

const About = (props) => {
  return (
    <ColorBackground backgroundColor="white">
      <div></div>
      <div className={`main-container ${props.className}`} id="scroll-about">
        <div className="about-section" style={{ marginBottom: "60px" }}>
          <h6>ABOUT</h6>
          <div className="about-inner">
            <p className="p-body">
              Hey there! I’m Sara, an illustrator, graphic designer, and web
              developer, nestled in the heart of Sweden’s forests. Whether
              you’re looking for some fun illustrations, graphics, or a
              smooth-running website to showcase your stuff, I’m here to help.
              Let’s chat about your idea!
            </p>
            <img src={avatarImage} id="profile-image" alt="me" />
          </div>
        </div>
        <div className="about-section">
          <h6>SERVICES</h6>
          <div className="skills-container">
            <div>
              <p className="p-body">Illustration</p>
              <p className="p-body">Graphic Design</p>
              <p className="p-body">Logo Design</p>
              <p className="p-body">Illustrator & Photoshop</p>
              <p className="p-body">Brand Identity</p>
              <p className="p-body">UI/UX Design</p>
              <p className="p-body">Poster Design</p>
              <p className="p-body">Figma</p>
              <p className="p-body">Webflow</p>
              <p className="p-body">Wix</p>
              <p className="p-body">Squarespace</p>
              <p className="p-body">HTML, CSS, Javascript, React</p>
            </div>
          </div>
        </div>
      </div>
    </ColorBackground>
  );
};

export default About;
