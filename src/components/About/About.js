import "./About.css";

import avatarImage from "../../images/avatar.png";
import ColorBackground from "../UI/ColorBackground";

const About = (props) => {
  return (
    <ColorBackground backgroundColor="#E5E3E0">
      <div
        className={`main-container ${props.className} extra-bottom-padding`}
        id="scroll-about"
      >
        <div className="about-section" style={{ marginBottom: "60px" }}>
          <h6>ABOUT</h6>
          <div className="about-inner">
            <p className="p-body">
              Hi! I’m Sara, a multidisciplinary creative specializing in
              illustration, graphic design, and web development. Nestled in the
              heart of Sweden’s forests, I’m passionate about crafting unique,
              impactful solutions that connect with your audience.
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
              <p className="p-body">Logos</p>
              <p className="p-body">Brand Identity</p>
              <p className="p-body">UI/UX Design</p>
              <p className="p-body">Poster Design</p>
              <p className="p-body">Webflow</p>
              <p className="p-body">Wix</p>
              <p className="p-body">Squarespace</p>
            </div>
          </div>
        </div>
      </div>
    </ColorBackground>
  );
};

export default About;
