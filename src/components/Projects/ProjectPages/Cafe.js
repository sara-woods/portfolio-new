import { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import cafeImage from "../../../images/cafe.png";
import "./ProjectPage.css";
import ColorSwatch from "../../UI/ColorSwatch";

const technologies = ["UI Design", "Webflow", "CMS"];

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
            src={cafeImage}
            alt="Café UI design"
          />
          <h3 className="">Café landing page</h3>
          <p className="text-grey case-study-body">
            Landing page for fictional café
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
              <p className="weight-700">UI Design, development</p>
            </div>
          </div>

          <div className="why-container" style={{ backgroundColor: "#E6F5F1" }}>
            <div id="why-text">
              <p className="weight-700 mb-4">Why I made this project</p>
              <p className="text-grey">
                Exploring my proficiency with Webflow, I embarked on the
                creation of a vibrant landing page for an imaginary café.
              </p>
            </div>
          </div>

          <div className="case-study-section">
            <h4>Visual design</h4>
            <p className="text-grey">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </p>
            <div className="color-font-info">
              <div>
                <h5 className="mt-5">Color</h5>
                <div className="swatch-group-container">
                  <ColorSwatch
                    backgroundColor="red"
                    hex="#F2F2F2"
                    name="Text secondary"
                  />
                  <ColorSwatch
                    backgroundColor="blue"
                    hex="#F2F2F2"
                    name="Text secondary"
                  />
                  <ColorSwatch
                    backgroundColor="green"
                    hex="#F2F2F2"
                    name="Text secondary"
                  />
                  <ColorSwatch
                    backgroundColor="yellow"
                    hex="#F2F2F2"
                    name="Text secondary"
                  />
                </div>
              </div>

              <div>
                <h5 className="mt-5">Font</h5>
                <p className="mb-1">Courier Prime</p>
                <p className="mb-1">Regular, Medium, Bold</p>
                <p className="courier-prime font-2rem mb-4">AaBbCcDdEeFfGg</p>
                <p>Londrina Solid</p>
                <p>Regular</p>
                <p className="londrina font-2rem">AaBbCcDdEeFfGg</p>
              </div>
            </div>
          </div>
          {/* <div className="case-study-section">
            <h4>Accessibility check</h4>
            <p className="text-grey">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </p>
            <img
              // onContextMenu={handleRightClick}
              // onDragStart={handleDrag}
              className="cover-image"
              src={cafeImage}
              alt="Café UI design"
            />
          </div>
          <div
            className="case-study-section"
            style={{ backgroundColor: "lightblue" }}
          >
            <img
              // onContextMenu={handleRightClick}
              // onDragStart={handleDrag}
              className="cover-image"
              src={cafeImage}
              alt="Café UI design"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Cafe;
