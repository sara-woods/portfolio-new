import { useState, useEffect } from "react";
import "./Filter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <>
      <div
        className={`filter-container ${
          filterSticky ? "filter-container-sticky" : ""
        } ${showFilterButton ? "" : "d-none"} `}
      >
        <button onClick={props.onFilter} className="filter-button">
          {props.filterText}
          <span className="ml-3 arrow">
            <FontAwesomeIcon icon={faArrowDown} />
          </span>
        </button>
        {props.showDropdown && (
          <div className="filter-dropdown">
            <ul>
              <li>
                <p
                  data-page="1"
                  onClick={props.onFilterChange}
                  className="filter-option"
                >
                  Web Development
                </p>
              </li>
              <li>
                <p
                  data-page="2"
                  onClick={props.onFilterChange}
                  className="filter-option"
                >
                  Illustrations
                </p>
              </li>
              <li>
                <p
                  data-page="3"
                  onClick={props.onFilterChange}
                  className="filter-option"
                >
                  Logo/Graphic Design
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
              className={`tab ${props.page === "1" ? "underline" : ""}`}
              onClick={props.onFilterChange}
            >
              Web Development
            </p>
          </li>
          <li>
            <p
              data-page="2"
              className={`tab ${props.page === "2" ? "underline" : ""}`}
              onClick={props.onFilterChange}
            >
              Illustrations
            </p>
          </li>
          <li>
            <p
              data-page="3"
              className={`tab ${props.page === "3" ? "underline" : ""}`}
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
