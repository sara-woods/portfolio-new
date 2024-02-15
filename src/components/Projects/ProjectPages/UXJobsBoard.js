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
import uxjobsboardGif from "../../../images/UXjobsboard/uxjobsboard-gif.gif";
import uxjobsboardArrow from "../../../images/UXjobsboard/uxjobsboard-font-arrow.png";
import uxjobsboardGraph from "../../../images/UXjobsboard/uxjobsboard-graph.png";
import competitiveanalysis from "../../../images/UXjobsboard/competitive-analysis.png";
import uxjobsboardAlignment from "../../../images/UXjobsboard/uxjobsboard-alignment.png";
// import uxjobsboardSecondImage from "../../../images/UXjobsboard/uxjobsboard-second-image.png";
import uxjobsboardSecondImage from "../../../images/UXjobsboard/uxjobsboardsecondimage.png";
import lightbulb from "../../../images/UXjobsboard/lightbulb.png";
import laptop from "../../../images/UXjobsboard/laptop.png";
import user1 from "../../../images/UXjobsboard/user1.png";
import user2 from "../../../images/UXjobsboard/user2.png";
import user3 from "../../../images/UXjobsboard/user3.png";
import user4 from "../../../images/UXjobsboard/user4.png";
import persona from "../../../images/UXjobsboard/persona.png";
import userflow from "../../../images/UXjobsboard/userflow.png";
import prototype from "../../../images/UXjobsboard/uxjobsboard-prototype.gif";
import wireframes from "../../../images/UXjobsboard/wireframes.png";
import illustrations from "../../../images/UXjobsboard/illustrations.png";

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
      {/* ------------INTRODUCTION----------------------------------------- */}
      <div className="main-container">
        <div className="case-study-container">
          <img
            // onContextMenu={handleRightClick}
            // onDragStart={handleDrag}
            className="cover-image"
            src={uxjobsboardCoverImage}
            alt="UX Jobs Finder UI design"
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
              <img
                src={lightbulb}
                id="lightbulb"
                alt="Lightbulb illustration"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ------------MARKET INSIGHTS----------------------------------------- */}
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
      {/* ------------COMPETITIVE ANALYSIS----------------------------------------- */}
      <ColorBackground backgroundColor="#F6F0FF">
        <div className="main-container">
          <div className="case-study-container">
            <div
              className="case-study-section"
              style={{ marginBottom: "80px" }}
            >
              <h4>Competitive analysis</h4>
              <p className="text-grey">
                I analyzed 3 different websites/apps in the space - looking at
                the job search experience as well as negative user comments
                through Reddit and Google.
              </p>
              <img
                // onContextMenu={handleRightClick}
                // onDragStart={handleDrag}
                className="img-80"
                src={competitiveanalysis}
                alt="Screen-shots from three competitors"
                style={{ marginBottom: "80px" }}
              />
              <h5 className="mt-5">The good</h5>
              <p className="text-grey">
                All three apps allow users to search and apply for jobs without
                forcing the user to have to create an account.
              </p>
              <h5 className="mt-5">The bad</h5>
              <ul>
                <li>
                  <p className="text-grey">
                    No information on when the job listing was posted (Dribbble)
                  </p>
                </li>
                <li>
                  <p className="text-grey">
                    No button to clear filters (UIUX Jobs Board, UX Jobs Board)
                  </p>
                </li>
                <li>
                  <p className="text-grey">
                    No option to filter on remote only (Dribbble)
                  </p>
                </li>
                <li>
                  <p className="text-grey">
                    Not user-friendly filter functionality (UX Jobs Board, UIUX
                    Jobs Board)
                  </p>
                </li>
                <li>
                  <p className="text-grey">
                    No option to filter for experience level (all three)
                  </p>
                </li>
              </ul>
              <h5 className="mt-5">Problems from the comments</h5>
              <div className="user-quote mb-4">
                <img src={user1} alt="User avatar 1" />
                <p className="text-grey font-1-25rem">
                  “Location search always infuriates me...”
                </p>
              </div>
              <div className="user-quote mb-4">
                <img src={user2} alt="User avatar 2" />
                <p className="text-grey font-1-25rem">
                  “When I search for remote jobs I want to ensure that the
                  listings I find actually are remote.”
                </p>
              </div>
              <div className="user-quote mb-4">
                <img src={user3} alt="User avatar 3" />
                <p className="text-grey font-1-25rem">
                  “Listings are often old or the job is not available anymore,
                  but the listing is still up.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* ------------PERSONA----------------------------------------- */}
      <ColorBackground backgroundColor="white">
        <div className="main-container">
          <div className="case-study-container">
            <div
              className="case-study-section"
              style={{ marginBottom: "80px" }}
            >
              <h4>Persona</h4>
              <p className="text-grey">
                I created one persona based on a typical user of the app.
              </p>
              <img
                className="img-80"
                src={persona}
                alt="Information about persona"
                style={{ marginBottom: "80px" }}
              />
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* ------------FLOW DIAGRAM----------------------------------------- */}
      <ColorBackground backgroundColor="#F7FFF0">
        <div className="main-container">
          <div className="case-study-container">
            <div
              className="case-study-section"
              style={{ marginBottom: "80px" }}
            >
              <h4>Flow diagram</h4>
              <p className="text-grey">
                To outline all the necessary functionality for the search
                journey, I began with a simple flow diagram. The app prioritizes
                ease of navigation, ensuring users seamlessly transition from
                welcome screen to search form, and subsequently, filter options.
              </p>
              <img
                className="img-80"
                src={userflow}
                alt="User flow diagram"
                style={{ marginBottom: "80px" }}
              />
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* ------------WIREFRAMES----------------------------------------- */}
      <ColorBackground backgroundColor="white">
        <div className="main-container">
          <div className="case-study-container">
            <div
              className="case-study-section"
              style={{ marginBottom: "80px" }}
            >
              <h4>Wireframes and prototype</h4>
              <p className="text-grey">
                Once the flow diagram was established, I started sketching
                wireframes with pen and paper of the main task flow - to find a
                Junior UX Designer job listing. Based on the sketches I then
                created low-fidelity wireframes in Figma.
              </p>
              <div
                className="wireframe-container-main"
                style={{ marginTop: "40px" }}
              >
                <div className="wireframe-container-left">
                  <img
                    className=""
                    src={wireframes}
                    alt="Wireframes"
                    style={{ marginBottom: "40px", width: "100%" }}
                  />
                  <p className="text-grey">
                    The low-fidelity wireframes were connected into a clickable
                    prototype, with the aim of testing the usability of the app
                    based on effectiveness, efficiency and user satisfaction.
                  </p>
                </div>
                <img
                  id="prototype"
                  src={prototype}
                  alt="Figma prototype"
                  style={{ width: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* ------------USABILITY TEST----------------------------------------- */}
      <ColorBackground backgroundColor="#F6F0FF">
        <div className="main-container">
          <div className="case-study-container">
            <div
              className="case-study-section"
              style={{ marginBottom: "80px" }}
            >
              <h4>Mini usability test</h4>
              <p className="text-grey">
                I tested my prototype with one user to assess its
                user-friendliness. We met in person, where I explained the test,
                assigned them a task, and asked for their feedback as they
                completed it. I closely observed how they interacted with the
                application and asked additional questions to gather insights
                for potential improvements.
              </p>
              <h5 className="mt-5">The task</h5>
              <div id="task">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3125 32.1618L16.5909 26.4403L14.3438 28.6874L22.3125 36.6562L36.6562 22.3124L34.4091 20.0493L22.3125 32.1618Z"
                    fill="white"
                  />
                  <path
                    d="M39.8438 7.96875H35.0625V6.375C35.0625 5.52962 34.7267 4.71887 34.1289 4.1211C33.5311 3.52332 32.7204 3.1875 31.875 3.1875H19.125C18.2796 3.1875 17.4689 3.52332 16.8711 4.1211C16.2733 4.71887 15.9375 5.52962 15.9375 6.375V7.96875H11.1562C10.3109 7.96875 9.50012 8.30457 8.90235 8.90235C8.30457 9.50012 7.96875 10.3109 7.96875 11.1562V44.625C7.96875 45.4704 8.30457 46.2811 8.90235 46.8789C9.50012 47.4767 10.3109 47.8125 11.1562 47.8125H39.8438C40.6891 47.8125 41.4999 47.4767 42.0977 46.8789C42.6954 46.2811 43.0312 45.4704 43.0312 44.625V11.1562C43.0312 10.3109 42.6954 9.50012 42.0977 8.90235C41.4999 8.30457 40.6891 7.96875 39.8438 7.96875ZM19.125 6.375H31.875V12.75H19.125V6.375ZM39.8438 44.625H11.1562V11.1562H15.9375V15.9375H35.0625V11.1562H39.8438V44.625Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white font-1-25rem">
                  “Show me how you would use this app to search for Junior UX
                  Designer jobs in London”
                </p>
              </div>
              <h5 className="mt-5">Test findings</h5>
              <p className="text-grey">
                There were no issues for the user to complete the task. However,
                feedback and suggestions were given during the interview.
              </p>
              <div className="user-quote mt-4 mb-4">
                <img src={user4} alt="User avatar 4" />
                <p className="text-grey font-1-25rem">
                  “I expected there to be a back button on the search page to
                  get back to the home screen.”
                </p>
              </div>
              <div className="user-quote mb-4">
                <img src={user4} alt="User avatar 4" />
                <p className="text-grey font-1-25rem">
                  “I was confused with the difference between the two buttons on
                  the home screen. I didn’t know what to expect by clicking the
                  first one but assumed that’s the one I should click to make
                  the search.”
                </p>
              </div>
              <h5 className="mt-5">Prototype updates</h5>
              <p className="text-grey">
                After receiving feedback, I made a few changes. This included
                removing the second button on the home screen, updating the CTA
                button text to "Search for a job," and adding a back button on
                the search page. Additionally, I realized the need to further
                evaluate the structure of the search process. Instead of
                immediately showing all listings and then applying filters, I
                decided to implement a search page before displaying listings -
                which should undergo A/B testing for validation. Another
                potential test would involve splitting the search page into
                multiple steps or screens.
              </p>
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* ------------UI DESIGN----------------------------------------- */}

      <ColorBackground backgroundColor="linear-gradient(#F7FFF0, #F6F0FF)">
        <div className="main-container">
          <div className="case-study-container">
            <div
              className="case-study-section"
              style={{ marginBottom: "80px" }}
            >
              <div
                className="why-container"
                style={{ backgroundColor: "#D7FF64", marginBottom: "160px" }}
              >
                <div id="why-text">
                  <p className="weight-700 mb-4">Time for the visual design</p>
                  <p>
                    Drawing from the research, persona and usability testing,
                    it’s time to delve into my favorite phase: crafting the
                    visual identity of the app.
                  </p>
                  <img src={laptop} id="laptop" alt="Laptop illustration" />
                </div>
              </div>
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
                    alt="Arrow describing font-style and illustrations in the design"
                  />
                </div>
              </div>
              <h5 className="mt-5">Energetic and friendly feel</h5>
              <p className="text-grey">
                I chose colors that spark energy while keeping the backgrounds
                neutral to not overwhelm. Since reading job listings in the app
                can be text heavy I chose DM Sans for the font, as it is
                suitable for small sizes. It also gives off a friendly yet
                professional feel.
              </p>
              <h5 className="mt-5">Alignment and grid</h5>
              <p className="text-grey">
                I picked an 8-point grid system for the project to ensure visual
                harmony and alignment and set the margins within groups at 12
                and 16, and margins between groups at 12, 16, 32 and 48 points.
              </p>
              <img
                // onContextMenu={handleRightClick}
                // onDragStart={handleDrag}
                className="img-80"
                src={uxjobsboardAlignment}
                alt="Showing alignment in the UX Jobs finder app"
              />
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* ------------SECOND DESIGN IMAGE----------------------------------------- */}
      <ColorBackground backgroundColor="#F7FFF0">
        <div className="main-container">
          <div className="case-study-container">
            <div
              className="case-study-section"
              style={{ position: "relative" }}
            >
              <img
                // onContextMenu={handleRightClick}
                // onDragStart={handleDrag}
                className="cover-image"
                src={uxjobsboardSecondImage}
                alt="UX Jobs Finder UI design"
                style={{
                  zIndex: "1000",
                  position: "relative",
                  marginBottom: "0",
                }}
              />
              <img
                // onContextMenu={handleRightClick}
                // onDragStart={handleDrag}
                id="illustrations"
                src={illustrations}
                alt="UX Jobs Finder UI design"
              />
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* -------------ACCESSIBILITY CHECK---------------------------------------- */}
      <ColorBackground backgroundColor="#F6F0FF">
        <div className="main-container">
          <div className="case-study-container">
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
                alt="Accessibility check illustration for contrast in colors"
              />
            </div>
          </div>
        </div>
      </ColorBackground>
      {/* ------------VIDEO----------------------------------------- */}
      <ColorBackground backgroundColor="white">
        <div className="main-container">
          <div className="case-study-container">
            <div className="case-study-section">
              <h4>Project summary</h4>
              <p className="text-grey">
                In this project, I created UX Job Finder, aimed at streamlining
                UX job searching. Through research and testing, I identified
                user pain points and refined the app's design for intuitive
                navigation and accessibility. By incorporating user feedback, I
                ensured the app met their needs. This project shows my abilities
                in UX and UI design, and solving problems. The result is a
                simple app that helps UX professionals find jobs easily.
              </p>
              <div className="video-section">
                <img
                  style={{
                    maxWidth: "420px",
                    marginTop: "60px",
                    marginBottom: "120px",
                  }}
                  src={uxjobsboardGif}
                  alt="UX jobs finder UI design"
                />
              </div>
            </div>
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
