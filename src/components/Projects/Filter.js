import { useState } from "react";
import "./Filter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {
  const [showFilterDropdown, setFilterDropDown] = useState(false);

  const filterHandler = (event) => {
    setFilterDropDown((prevState) => !prevState);
  };

  return (
    <div className="filter">
      <button onClick={filterHandler} className="filter-button">
        {props.filterText}
        <span className="ml-3 arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </button>
      {showFilterDropdown && <div className="filter-dropdown"></div>}
    </div>
  );
};

export default Filter;
