import { useEffect } from "react";

import "./ProjectPage.css";

import Navbar from "../../Navbar/Navbar";
import ColorSwatch from "../../UI/ColorSwatch";
import ColorBackground from "../../UI/ColorBackground";
import LinkButton from "../../UI/LinkButton";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

import uxjobsboardCoverImage from "../../../images/UXjobsboard/uxjobsboard-cover-image.png";
import uxjobsboardAccessibilityImage from "../../../images/UXjobsboard/uxjobsboard-accessibility-check.png";
// import uxjobsboardGif from "../../../images/UXjobsboard/uxjobsboard-gif.gif";
import uxjobsboardArrow from "../../../images/UXjobsboard/uxjobsboard-font-arrow.png";
import uxjobsboardGraph from "../../../images/UXjobsboard/uxjobsboard-graph.png";
import uxjobsboardAlignment from "../../../images/UXjobsboard/uxjobsboard-alignment.png";
import uxjobsboardSecondImage from "../../../images/UXjobsboard/uxjobsboard-second-image.png";
import lightbulb from "../../../images/UXjobsboard/lightbulb.png";
import laptop from "../../../images/UXjobsboard/laptop.png";

const technologies = [
  "Market research",
  "Competitive analysis",
  "Personas",
  "Wireframes",
  "Flow diagram",
  "High-fidelity UI",
  "Prototype",
  "Mini usability study",
  "Accessibility evaluation",
];

const UXJobsBoard = () => {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="case-study-container">
          <img
            // onContextMenu={handleRightClick}
            // onDragStart={handleDrag}
            className="cover-image"
            src={uxjobsboardCoverImage}
            alt="Café UI design"
          />
          <h3 className="">UX Job Finder</h3>
          <p className="text-grey case-study-body">
            Seamless job searching in the UX field
          </p>

          <div className="tech-tags">
            {technologies.map((techname) => (
              <div key={techname}>
                <p className="tech-tag">{techname}</p>
              </div>
            ))}
          </div>

          <div className="case-study-info">
            <div>
              <p className="text-grey">What</p>
              <p className="weight-700">Native mobile app (iOS)</p>
            </div>
            <div>
              <p className="text-grey">Why</p>
              <p className="weight-700">Portfolio project</p>
            </div>
            <div>
              <p className="text-grey">Role</p>
              <p className="weight-700">UX research, UX design, UI design</p>
            </div>
          </div>

          <div className="why-container" style={{ backgroundColor: "#8A4CDC" }}>
            <div id="why-text">
              <p className="weight-700 mb-4" style={{ color: "#F6F0FF" }}>
                Why I made this project
              </p>
              <p className="text-white">
                I created this case study with the vision of an app that would
                streamline job searching within the UX field and make the
                experience of finding relevant job positions as pain-free as
                possible. By documenting the journey of UX Job Finder, I want to
                showcase my ability to tackle real-world challenges and my
                commitment to creating intuitive, user-centric experiences that
                drive positive outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------- */}
      <ColorBackground backgroundColor="white">
        <div className="main-container">
          <div className="case-study-container">
            <div
              className="case-study-section"
              style={{ marginBottom: "80px" }}
            >
              <h4>Market insights</h4>
              <h5 className="mt-5">The claim and the problem</h5>
              <p className="text-grey">
                As the demand for UX designers skyrockets, the search for the
                perfect job becomes increasingly daunting. Nielsen Norman
                Group's projections foresee a staggering rise in UX
                professionals globally, reaching over 100 million by 2050.
                However, amidst this growth, the challenge persists: traditional
                job search platforms lack the finesse needed to match skilled
                individuals with their ideal roles, resulting in frustration for
                both employers and job seekers.
              </p>
              <img
                // onContextMenu={handleRightClick}
                // onDragStart={handleDrag}
                className="img-80"
                src={uxjobsboardGraph}
                alt="Graph showing number of ux professionals into the future"
              />
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* ----------------------------------------------------- */}
      <ColorBackground backgroundColor="linear-gradient(#F7FFF0, #F6F0FF)">
        <div className="main-container">
          <div className="case-study-container">
            <div
              className="case-study-section"
              style={{ marginBottom: "80px" }}
            >
              <h4>High-fidelity UI design</h4>
              <p className="text-grey">
                I started with defining the fonts and colors and overall vibe,
                to then move on to the screens themselves. To light up the mood
                of the app I also created a few illustrations.
              </p>
              <div className="color-font-info">
                <div>
                  <h5 className="mt-5">Color</h5>
                  <div className="swatch-group-container">
                    <ColorSwatch
                      backgroundColor="#8D53D9"
                      hex="#8D53D9"
                      name="Main accent"
                    />
                    <ColorSwatch
                      backgroundColor="#D0CAE4"
                      hex="#D0CAE4"
                      name="Neutral"
                    />
                    <ColorSwatch
                      backgroundColor="#DBFF73"
                      hex="#DBFF73"
                      name="Primary"
                    />
                    <ColorSwatch
                      backgroundColor="#F7FFF0"
                      hex="#F7FFF0"
                      name="Secondary"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="mt-5">Font</h5>
                  <p className="mb-2">DM Sans (Regular, Medium, Bold)</p>
                  <p className="dmsans typeface weight-400">AaBbCcDdEeFfGg</p>
                  <p className="dmsans typeface weight-500">AaBbCcDdEeFfGg</p>
                  <p className="dmsans typeface weight-700 mb-4">
                    AaBbCcDdEeFfGg
                  </p>
                  <img
                    src={uxjobsboardArrow}
                    id="uxjobsboard-arrow"
                    alt="Arrow describing font-style and illustrations in the"
                  />
                </div>
              </div>
            </div>
            {/* ----------------------------------------------------- */}

            <div className="case-study-section">
              <h4>Accessibility check</h4>
              <p className="text-grey">
                The app was evaluated for contrast to match AA standards of WCAG
                using the Color Contrast plugin in Figma.
              </p>
              <img
                // onContextMenu={handleRightClick}
                // onDragStart={handleDrag}
                className="img-80"
                src={uxjobsboardAccessibilityImage}
                alt="Café accessibility check for contrast in colors"
              />
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* ----------------------------------------------------- */}

      <ColorBackground backgroundColor="white">
        <div className="main-section extra-bottom-padding">
          <div className="video-section">
            <img
              // onContextMenu={handleRightClick}
              // onDragStart={handleDrag}
              style={{ width: "80%", marginTop: "60px", marginBottom: "24px" }}
              src={uxjobsboardCoverImage}
              alt="Café UI design"
            />
            <LinkButton text="Visit Webflow site" className="mt-4" />
          </div>
        </div>
      </ColorBackground>
      <Contact
        caseStudy={true}
        backgroundColor="#EFC3F5"
        header="Thank you for reading :)"
      />
      <Footer backgroundColor="#EFC3F5" />
    </>
  );
};

export default UXJobsBoard;
