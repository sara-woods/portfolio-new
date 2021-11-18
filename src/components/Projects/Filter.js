import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Filter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {
  const { t } = useTranslation();
  const [filterSticky, setFilterSticky] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navbarOffset = 130;

  // ON FIRST LOAD //
  useEffect(() => {
    if (window.innerWidth > 800) setShowFilterButton(false);
    if (window.innerWidth <= 800) setShowFilterButton(true);
  }, []);

  // SCROLL //
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.querySelector(".scroll-anchor").offsetTop;
      const projectTop = document.querySelector("#projects").offsetTop;
      const projectHeight = document.querySelector("#projects").offsetHeight;
      const projectBottom = projectHeight + projectTop;
      setShowFilterButton(true);
      if (
        window.scrollY > scrollTop + navbarOffset &&
        window.scrollY < projectBottom - navbarOffset
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
      const projectBottom = projectHeight + projectTop - navbarOffset;

      setShowFilterButton(true);
      if (
        window.scrollY > scrollTop + navbarOffset &&
        window.scrollY < projectBottom
      ) {
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
        {t("filterOptions.header")}
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
              {t("filterOptions.webDev")}
            </p>
          </li>
          <li>
            <p
              data-page="2"
              className={`tab ${props.page === "2" ? "underline-tab" : ""}`}
              onClick={props.onFilterChange}
            >
              {t("filterOptions.illustrations")}
            </p>
          </li>
          <li>
            <p
              data-page="3"
              className={`tab ${props.page === "3" ? "underline-tab" : ""}`}
              onClick={props.onFilterChange}
            >
              {t("filterOptions.graphicDesign")}
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
                    {t("filterOptions.webDev")}
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
                    {t("filterOptions.illustrations")}
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
                    {t("filterOptions.graphicDesign")}
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
