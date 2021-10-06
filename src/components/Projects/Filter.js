import { useState, useEffect } from "react";
import "./Filter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {
  const [filterSticky, setFilterSticky] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(true);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    const handleScroll = () => {
      const elementTarget = document.querySelector(".scroll-anchor");
      const elementTargetOffsetTop = elementTarget.offsetTop;
      if (window.scrollY > elementTargetOffsetTop + 100) {
        setFilterSticky(true);
        if (windowWidth > 800) {
          setShowFilterButton(true);
        }
      } else {
        setFilterSticky(false);
        if (windowWidth > 800) {
          setShowFilterButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowWidth]);

  let filterButton;

  if (props.showDropdown) {
    filterButton = (
      <button onClick={props.onFilter} className="filter-button">
        Filter Content
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
      <div
        className={`filter-container ${
          filterSticky ? "filter-container-sticky" : ""
        } ${showFilterButton ? "" : "d-none"} `}
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
                    Web Development
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
                    Illustrations
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
                    Logo/Graphic Design
                  </span>
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>

      {windowWidth > 800 && (
        <ul className="tabs">
          <li>
            <p
              data-page="1"
              className={`tab ${props.page === "1" ? "underline-tab" : ""}`}
              onClick={props.onFilterChange}
            >
              Web Development
            </p>
          </li>
          <li>
            <p
              data-page="2"
              className={`tab ${props.page === "2" ? "underline-tab" : ""}`}
              onClick={props.onFilterChange}
            >
              Illustrations
            </p>
          </li>
          <li>
            <p
              data-page="3"
              className={`tab ${props.page === "3" ? "underline-tab" : ""}`}
              onClick={props.onFilterChange}
            >
              Logo/Graphic Design
            </p>
          </li>
        </ul>
      )}
    </>
  );
};

export default Filter;
