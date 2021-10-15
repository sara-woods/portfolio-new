import { useState, useEffect } from "react";
import "./Filter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { contentData } from "../../contentData";

const Filter = (props) => {
  const [filterSticky, setFilterSticky] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [scrollTargetTop, setScrollTargetTop] = useState(0);
  // const [projectTargetTop, setProjectTargetTop] = useState(0);
  // const [projectTargetHeight, setProjectTargetHeight] = useState(0);
  // const [projectTargetBottom, setProjectTargetBottom] = useState(0);

  // console.log("scroll-top", scrollTargetTop);
  // console.log("top", projectTargetTop);
  // console.log("height", projectTargetHeight);
  // console.log("bottom", projectTargetBottom);
  // console.log("----------------");

  // ON FIRST LOAD //
  useEffect(() => {
    if (window.innerWidth > 800) setShowFilterButton(false);
    if (window.innerWidth <= 800) setShowFilterButton(true);
    // const scrollTop = document.querySelector(".scroll-anchor").offsetTop;
    // const projectTop = document.querySelector("#projects").offsetTop;
    // const projectHeight = document.querySelector("#projects").offsetHeight;
    // const projectBottom = projectHeight + projectTop - 200;

    // setScrollTargetTop(scrollTop);
    // setProjectTargetTop(projectTop);
    // setProjectTargetHeight(projectHeight);
    // setProjectTargetBottom(projectBottom);
  }, []);

  // SCROLL //
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.querySelector(".scroll-anchor").offsetTop;
      const projectTop = document.querySelector("#projects").offsetTop;
      const projectHeight = document.querySelector("#projects").offsetHeight;
      const projectBottom = projectHeight + projectTop;
      console.log("scroll-top", scrollTop);
      console.log("top", projectTop);
      console.log("height", projectHeight);
      console.log("bottom", projectBottom);
      console.log("scroll", window.scrollY);
      console.log("----------------");
      setShowFilterButton(true);
      if (
        window.scrollY > scrollTop + 200 &&
        window.scrollY < projectBottom - 200
      ) {
        setFilterSticky(true);
      } else {
        setFilterSticky(false);
        if (window.innerWidth > 800) setShowFilterButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // RESIZE
  useEffect(() => {
    const handleResize = () => {
      const scrollTop = document.querySelector(".scroll-anchor").offsetTop;
      const projectTop = document.querySelector("#projects").offsetTop;
      const projectHeight = document.querySelector("#projects").offsetHeight;
      const projectBottom = projectHeight + projectTop - 200;

      setShowFilterButton(true);
      if (window.scrollY > scrollTop + 200 && window.scrollY < projectBottom) {
        setFilterSticky(true);
      } else {
        setFilterSticky(false);
        if (window.innerWidth > 800) setShowFilterButton(false);
      }

      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let filterButton;

  if (props.showDropdown) {
    filterButton = (
      <button onClick={props.onFilter} className="filter-button">
        {contentData.filterOptions.header}
        <span className="ml-3 arrow">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </button>
    );
  }

  if (!props.showDropdown) {
    filterButton = (
      <button onClick={props.onFilter} className="filter-button">
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
              className={`tab ${props.page === "1" ? "underline-tab" : ""}`}
              onClick={props.onFilterChange}
            >
              {contentData.filterOptions.webDev}
            </p>
          </li>
          <li>
            <p
              data-page="2"
              className={`tab ${props.page === "2" ? "underline-tab" : ""}`}
              onClick={props.onFilterChange}
            >
              {contentData.filterOptions.illustrations}
            </p>
          </li>
          <li>
            <p
              data-page="3"
              className={`tab ${props.page === "3" ? "underline-tab" : ""}`}
              onClick={props.onFilterChange}
            >
              {contentData.filterOptions.graphicDesign}
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

        {props.showDropdown && (
          <div className="filter-dropdown">
            <ul>
              <li>
                <p className="filter-option">
                  <span
                    data-page="1"
                    onClick={props.onFilterChange}
                    id="filter-text"
                    className={props.page === "1" ? "underline-filter" : ""}
                  >
                    {contentData.filterOptions.webDev}
                  </span>
                </p>
              </li>
              <li>
                <p className="filter-option">
                  <span
                    data-page="2"
                    onClick={props.onFilterChange}
                    id="filter-text"
                    className={props.page === "2" ? "underline-filter" : ""}
                  >
                    {contentData.filterOptions.illustrations}
                  </span>
                </p>
              </li>
              <li>
                <p className="filter-option">
                  <span
                    data-page="3"
                    onClick={props.onFilterChange}
                    id="filter-text"
                    className={props.page === "3" ? "underline-filter" : ""}
                  >
                    {contentData.filterOptions.graphicDesign}
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
