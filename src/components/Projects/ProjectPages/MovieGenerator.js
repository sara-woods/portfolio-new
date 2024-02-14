import { useEffect } from "react";

import "./ProjectPage.css";
import Navbar from "../../Navbar/Navbar";
import ColorSwatch from "../../UI/ColorSwatch";
import ColorBackground from "../../UI/ColorBackground";
import LinkButton from "../../UI/LinkButton";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

import movieCoverImage from "../../../images/Movie/movie-cover-image.png";
import movieGif from "../../../images/Movie/movie-gif.gif";
import movieAlignment from "../../../images/Movie/movie-alignment.png";
import popcorn from "../../../images/Movie/popcorn.png";
import ipad from "../../../images/Movie/ipad.png";

const technologies = [
  "UI Design",
  "Responsive",
  "React",
  "API",
  "Ruby on Rails",
];

const MovieGenerator = () => {
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
            src={movieCoverImage}
            alt="Movie generator UI design"
          />
          <h3 className="">Movie generator</h3>
          <p className="text-grey case-study-body">
            Streamlining the movie night decision
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
              <p className="weight-700">Web application</p>
            </div>
            <div>
              <p className="text-grey">Why</p>
              <p className="weight-700">Portfolio project</p>
            </div>
            <div>
              <p className="text-grey">Role</p>
              <p className="weight-700">UI Design, development</p>
            </div>
          </div>

          <div
            className="why-container"
            style={{ backgroundColor: "#F5F4FF", position: "relative" }}
          >
            <div id="why-text">
              <p className="weight-700 mb-4">Why I made this project</p>
              <p className="text-grey">
                In this project, I conceptualized, designed, and coded a
                personalized web app aimed at simplifying the movie selection
                process for those indecisive evenings.
              </p>
            </div>
            <img id="popcorn" src={popcorn} alt="popcorn" />
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
                The layout focuses on a straightforward design, prominently
                featuring the movie generator button and the basic information
                needed to make a movie night choice. To enhance accessibility, I
                included a direct link to the movie trailer on YouTube. To align
                with the cinematic theme, I incorporated a concealed collage of
                movie posters in the background, complemented by an aurora
                overlay. The movie card adopts a glassmorphism style,
                incorporating subtle transparency and background blur for a
                sleek and modern feel.
              </p>
              <div className="color-font-info">
                <div>
                  <h5 className="mt-5">Color</h5>
                  <div className="swatch-group-container">
                    <ColorSwatch
                      backgroundColor="#D12141"
                      hex="#D12141"
                      name="Primary"
                    />
                    <ColorSwatch
                      backgroundColor="#887F9D"
                      hex="#2887F9D"
                      name="Secondary"
                    />
                    <ColorSwatch
                      backgroundColor="#1C1C1C"
                      hex="#1C1C1C"
                      name="Dark gray"
                    />
                    <ColorSwatch
                      backgroundColor="#36323F"
                      hex="#36323F"
                      name="Gray"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="mt-5">Font</h5>
                  <p className="mb-1">Poppins (Regular, Medium, Black)</p>
                  <p className="poppins typeface weight-400">AaBbCcDdEeFfGg</p>
                  <p className="poppins typeface weight-500">AaBbCcDdEeFfGg</p>
                  <p className="poppins typeface mb-4 weight-900">
                    AaBbCcDdEeFfGg
                  </p>
                </div>
              </div>
            </div>
            {/* ----------------------------------------------------- */}

            <div className="case-study-section">
              <h4>Alignment and grid</h4>
              <p className="text-grey">
                I picked an 8-point grid system for the project to ensure visual
                harmony and alignment and set the margins within the movie card
                at 8, 20, 24 and 32 pt.
              </p>
              <img
                // onContextMenu={handleRightClick}
                // onDragStart={handleDrag}
                className="img-80"
                src={movieAlignment}
                alt="Movie generator accessibility check for contrast in colors"
              />
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* ----------------------------------------------------- */}

      <ColorBackground backgroundColor="#1A1A1A">
        <div className="main-section extra-bottom-padding">
          <div className="video-section">
            <div
              className="case-study-section"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                paddingTop: "100px",
              }}
            >
              <img
                // onContextMenu={handleRightClick}
                // onDragStart={handleDrag}
                style={{
                  width: "80%",
                  margin: "0 auto 24px auto",
                }}
                src={movieGif}
                alt="movie generator gif"
              />
              <img
                // onContextMenu={handleRightClick}
                // onDragStart={handleDrag}
                id="ipad"
                src={ipad}
                alt="ipad frame"
              />
              <LinkButton text="Visit site" className="mt-4 white" />
            </div>
          </div>
        </div>
      </ColorBackground>
      <Contact
        className="text-white"
        caseStudy={true}
        backgroundColor="#D12141"
        header="Thank you for reading :)"
      />
      <Footer backgroundColor="#D12141" className="text-white" />
    </>
  );
};

export default MovieGenerator;
