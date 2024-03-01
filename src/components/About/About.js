import "./About.css";

import WrapperBackground from "../UI/WrapperBackground";
import profileImage from "../../images/portrait.jpg";

const About = (props) => {
  return (
    <WrapperBackground backgroundColor="#E5E3E0" id="wrapper-contact">
      <div
        className={`main-container ${props.className} extra-bottom-padding`}
        id="scroll-about"
      >
        <h1>About</h1>
        <div className="about-section" style={{ marginBottom: "100px" }}>
          <span></span>
          <div>
            <img src={profileImage} id="profile-image" alt="me" />
            <p>
              Hi! I’m Sara, based in Sweden and like to play with UI design,
              illustration and web development.
            </p>
          </div>
        </div>
        <div className="about-section">
          <h6>SKILLS</h6>
          <div className="skills-container">
            <div>
              <p>Figma</p>
              <p>UI Design</p>
              <p>UX Design</p>
              <p>Graphic Design</p>
              <p>Adobe Illustrator</p>
              <p>Procreate</p>
            </div>
            <div>
              <p>Webflow</p>
              <p>Javascript</p>
              <p>HTML/CSS</p>
              <p>React</p>
              <p>Ruby on Rails</p>
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </WrapperBackground>
  );
};

export default About;
