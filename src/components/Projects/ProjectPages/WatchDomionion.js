import { useEffect } from "react";
import "./ProjectPage.css";

import Navbar from "../../Navbar/Navbar";
import ColorSwatch from "../../UI/ColorSwatch";
import ColorBackground from "../../UI/ColorBackground";
import LinkButton from "../../UI/LinkButton";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

import watchdominionCoverImage from "../../../images/WatchDominion/watchdominion-cover-image.png";
import watchdominionGif from "../../../images/WatchDominion/watchdominion-gif.gif";
import watchdominionArrow from "../../../images/WatchDominion/watchdominion-arrow.png";

const technologies = ["UI Design", "Responsive"];

const WatchDominion = () => {
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
            src={watchdominionCoverImage}
            alt="Watchdominion.org UI design"
          />
          <h3 className="">WatchDominion.org</h3>
          <p className="text-grey case-study-body">
            Spreading the documentary Dominion
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
              <p className="weight-700">Website</p>
            </div>
            <div>
              <p className="text-grey">Why</p>
              <p className="weight-700">Volunteer Work, Vegan Hacktivists</p>
            </div>
            <div>
              <p className="text-grey">Role</p>
              <p className="weight-700">UI Design</p>
            </div>
          </div>

          <div
            className="why-container"
            style={{ backgroundColor: "#F4C41A", position: "relative" }}
          >
            <div id="why-text">
              <p className="weight-700 mb-4">Why I made this project</p>
              <p style={{ color: "#38383B" }}>
                The advocacy for animal rights is very important to me,
                therefore I joined up with the Vegan Hacktivists where this
                project was brought to life to help promote and spread the
                impactful documentary Dominion.
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
              <h4>Visual interface definitions</h4>
              <p className="text-grey">
                Since the main action on the website is to watch the movie I
                wanted a dark color predominantly. I added a yellow accent color
                as it is considered energizing, to help encourage the visitors
                to take action. I kept the images focused on the animals with a
                transparent gradient.
              </p>
              <div className="color-font-info">
                <div>
                  <h5 className="mt-5">Color</h5>
                  <div className="swatch-group-container">
                    <ColorSwatch
                      backgroundColor="#F4C41A"
                      hex="#F4C41A"
                      name="Primary"
                    />
                    <ColorSwatch
                      backgroundColor="#171716"
                      hex="#2171716"
                      name="Secondary"
                    />
                    <ColorSwatch
                      backgroundColor="#EFE9DC"
                      hex="#EFE9DC"
                      name="Neutral"
                    />
                    <ColorSwatch
                      backgroundColor="#F9F9F9"
                      hex="#F9F9F9"
                      name="White"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="mt-5">Font</h5>
                  <p className="mb-2">Rubik (Light, Bold, Black)</p>
                  <p className="rubik font-2rem weight-300">AaBbCcDdEeFfGg</p>
                  <p className="rubik font-2rem weight-700">AaBbCcDdEeFfGg</p>
                  <p className="rubik font-2rem mb-4 weight-900">
                    AaBbCcDdEeFfGg
                  </p>
                  <p className="mb-2">Rock Salt (Regular)</p>
                  <p className="rocksalt font-2rem">AaBbCcDdEeFfGg</p>
                  <img
                    src={watchdominionArrow}
                    style={{ width: "250px", margin: "8px 0 0 24px" }}
                    alt="Arrow describing font style Rocksalt"
                  />
                </div>
              </div>
            </div>
            {/* ----------------------------------------------------- */}
          </div>
        </div>
      </ColorBackground>
      {/* ----------------------------------------------------- */}

      <ColorBackground backgroundColor="#171716">
        <div className="main-section extra-bottom-padding">
          <div className="video-section">
            <img
              // onContextMenu={handleRightClick}
              // onDragStart={handleDrag}
              style={{ width: "80%", marginTop: "60px", marginBottom: "24px" }}
              src={watchdominionGif}
              alt="Watch Domionion website scroll gif"
            />
            <LinkButton text="Visit site" className="mt-4 white" />
          </div>
        </div>
      </ColorBackground>
      <Contact
        caseStudy={true}
        backgroundColor="#EFE9DC"
        header="Thank you for reading :)"
      />
      <Footer backgroundColor="#EFE9DC" />
    </>
  );
};

export default WatchDominion;
