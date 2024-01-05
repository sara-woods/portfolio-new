import { useState, useEffect, useContext } from "react";
import "./Filter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ProjectContext from "../../store/project-context";

const Filter = (props) => {
  const filterOptions = {
    header: "Filter Content",
    webDev: "Web development/design",
    illustrations: "Illustrations",
    graphicDesign: "Graphic design",
  }
  const ctx = useContext(ProjectContext);
  const [filterSticky, setFilterSticky] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navbarOffset = 180;
  const projectBottomOffset = 200;

  const filterButtonHandler = () => {
    const scrollTop = document.querySelector(".scroll-anchor").offsetTop;
    const projectTop = document.querySelector("#projects").offsetTop;
    const projectHeight = document.querySelector("#projects").offsetHeight;
    const projectBottom = projectHeight + projectTop - navbarOffset - projectBottomOffset;
    setShowFilterButton(true);
    if (window.innerWidth >= 1000) {
      // If the window is larger than 1000 there is no need for the filter button at all
      setShowFilterButton(false);
    } else if (
      // If scroll position is between start and end of the projects section
      window.scrollY > scrollTop + navbarOffset &&
      window.scrollY < projectBottom
    ) {
      // If true, the filter button is sticky
      setFilterSticky(true);
    } else {
      // If false, the filter button is not sticky
      setFilterSticky(false);
      // And if the window size is larger than 800 the filter button has to be removed completely
      if (window.innerWidth > 800) setShowFilterButton(false);
    }
  }

  // ON FIRST LOAD //
  useEffect(() => {
    // Hide filter button on page load if window size is larger than 800
    if (window.innerWidth > 800) setShowFilterButton(false);
    if (window.innerWidth <= 800) setShowFilterButton(true);
  }, []);

  // SCROLL //
  useEffect(() => {
    const handleScroll = () => {
      filterButtonHandler();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // RESIZE
  useEffect(() => {
    const handleResize = () => {
      filterButtonHandler(); // Filter button needs to be removed if window size got bigger than threshold
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let filterButton;

  if (ctx.showFilterDropdown) {
    filterButton = (
      <button onClick={ctx.showFilterHandler} className="filter-button">
        {filterOptions.header}
        <span className="ml-3 arrow">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </button>
    );
  } else {
    filterButton = (
      <button onClick={ctx.showFilterHandler} className="filter-button">
        {props.filterText}
        <span className="ml-3 arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </button>
    );
  }

  return (
    <>
      {windowWidth > 800 && (
        <ul className="tabs">
          <li>
            <p
              data-page="1"
              className={`tab ${ctx.page === "1" ? "underline-tab" : ""}`}
              onClick={ctx.handlePageChange}
            >
              {filterOptions.webDev}
            </p>
          </li>
          <li>
            <p
              data-page="2"
              className={`tab ${ctx.page === "2" ? "underline-tab" : ""}`}
              onClick={ctx.handlePageChange}
            >
              {filterOptions.illustrations}
            </p>
          </li>
          <li>
            <p
              data-page="3"
              className={`tab ${ctx.page === "3" ? "underline-tab" : ""}`}
              onClick={ctx.handlePageChange}
            >
              {filterOptions.graphicDesign}
            </p>
          </li>
        </ul>
      )}

      <div
        className={`filter-container ${
          filterSticky ? "filter-container-sticky" : ""
        } ${showFilterButton ? "" : "invisible"} `}
      >
        {filterButton}

        {ctx.showFilterDropdown && (
          <div className="filter-dropdown">
            <ul>
              <li>
                <p className="filter-option">
                  <span
                    data-page="1"
                    onClick={ctx.handlePageChange}
                    id="filter-text"
                    className={ctx.page === "1" ? "underline-filter" : ""}
                  >
                    {filterOptions.webDev}
                  </span>
                </p>
              </li>
              <li>
                <p className="filter-option">
                  <span
                    data-page="2"
                    onClick={ctx.handlePageChange}
                    id="filter-text"
                    className={ctx.page === "2" ? "underline-filter" : ""}
                  >
                    {filterOptions.illustrations}
                  </span>
                </p>
              </li>
              <li>
                <p className="filter-option">
                  <span
                    data-page="3"
                    onClick={ctx.handlePageChange}
                    id="filter-text"
                    className={ctx.page === "3" ? "underline-filter" : ""}
                  >
                    {filterOptions.graphicDesign}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
