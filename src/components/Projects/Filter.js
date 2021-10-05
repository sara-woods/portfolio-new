import { useState } from "react";
import "./Filter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {
  const [showFilterDropdown, setFilterDropDown] = useState(false);

  const showFilterHandler = (event) => {
    setFilterDropDown((prevState) => !prevState);
  };

  return (
    <div className="filter">
      <button onClick={showFilterHandler} className="filter-button">
        {props.filterText}
        <span className="ml-3 arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </button>
      {showFilterDropdown && (
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
                Logo/Web Design
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
