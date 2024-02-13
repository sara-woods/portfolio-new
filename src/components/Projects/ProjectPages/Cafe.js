import { useEffect } from "react";
import "./ProjectPage.css";

import Navbar from "../../Navbar/Navbar";
import ColorSwatch from "../../UI/ColorSwatch";
import ColorBackground from "../../UI/ColorBackground";
import LinkButton from "../../UI/LinkButton";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

import cafeCoverImage from "../../../images/Cafe/cafe-cover-image.png";
import cafeAccessibilityImage from "../../../images/Cafe/cafe-accessibility.png";
import cafeGif from "../../../images/Cafe/cafe-gif.gif";
import cafeArrow from "../../../images/Cafe/cafe-font-arrow.png";

const technologies = ["UI Design", "Responsive", "Webflow", "CMS"];

const Cafe = () => {
  // Scroll to top of page from react-router Link
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
            src={cafeCoverImage}
            alt="Café UI design"
          />
          <h3 className="">Café landing page</h3>
          <p className="text-grey case-study-body">
            A landing page for a fictional café
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
              <p className="weight-700">Landing page</p>
            </div>
            <div>
              <p className="text-grey">Why</p>
              <p className="weight-700">Portfolio project</p>
            </div>
            <div>
              <p className="text-grey">Role</p>
              <p className="weight-700">UI Design, Webflow development</p>
            </div>
          </div>

          <div className="why-container" style={{ backgroundColor: "#E6F5F1" }}>
            <div id="why-text">
              <p className="weight-700 mb-4">Why I made this project</p>
              <p className="text-grey">
                Exploring my proficiency with Webflow, I decided to create a
                vibrant landing page for an imaginary café.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------- */}
      <ColorBackground backgroundColor="#EAF9FB">
        <div className="main-container">
          <div className="case-study-container">
            <div
              className="case-study-section"
              style={{ marginBottom: "80px" }}
            >
              <h4>Visual interface definitions</h4>
              <p className="text-grey">
                I was inspired by the lively ambiance of the café's interior,
                and decided to incorporate a teal color drawn from the wall
                color inside the café. To enhance visual appeal, I added a
                complimentary pink accent. The imagery on the page mimics large
                arched windows, adding a touch of elegance to the overall
                design.
              </p>
              <div className="color-font-info">
                <div>
                  <h5 className="mt-5">Color</h5>
                  <div className="swatch-group-container">
                    <ColorSwatch
                      backgroundColor="#EFC3F5"
                      hex="#EFC3F5"
                      name="Main accent"
                    />
                    <ColorSwatch
                      backgroundColor="#2EA3B2"
                      hex="#2EA3B2"
                      name="Primary"
                    />
                    <ColorSwatch
                      backgroundColor="#E6F5F1"
                      hex="#E6F5F1"
                      name="Secondary"
                    />
                    <ColorSwatch
                      backgroundColor="#334E58"
                      hex="#334E58"
                      name="Dark"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="mt-5">Font</h5>
                  <p className="mb-2">Courier Prime (Regular, Medium, Bold)</p>
                  <p className="courier-prime font-2rem mb-4">AaBbCcDdEeFfGg</p>
                  <p>Londrina Solid (Regular)</p>
                  <p className="londrina font-2rem mb-2">AaBbCcDdEeFfGg</p>
                  <img
                    src={cafeArrow}
                    style={{ width: "250px", margin: "8px 0 0 24px" }}
                    alt="Arrow describing font-style"
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
                src={cafeAccessibilityImage}
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
              src={cafeGif}
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

export default Cafe;
