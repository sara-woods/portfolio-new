import { useState } from "react";
import "./Projects.css";
import WebDevProjects from "./WebDevProjects";
import Illustrations from "./Illustrations";
import GraphicDesigns from "./GraphicDesigns";
import Filter from "./Filter";
import Button from "../UI/Button";

import { contentData } from "../../contentData";

const Projects = (props) => {
  const [page, setPage] = useState("1");
  const [showFilterDropdown, setFilterDropdown] = useState(false);

  const handlePageChange = (event) => {
    setPage(event.target.dataset.page);
    setFilterDropdown(false);
    document.querySelector(".scroll-anchor").scrollIntoView();
  };

  const showFilterHandler = (event) => {
    setFilterDropdown((prevState) => !prevState);
  };

  let filterText;

  switch (page) {
    case "1":
      filterText = contentData.filterOptions.webDev;
      break;
    case "2":
      filterText = contentData.filterOptions.illustrations;
      break;
    case "3":
      filterText = contentData.filterOptions.graphicDesign;
      break;
    default:
      filterText = contentData.filterOptions.webDev;
  }

  return (
    <div id="projects">
      <div id="projects-anchor" className="scroll-anchor"></div>
      <h1 className="mb-5 header">{contentData.navLinks.projects}</h1>

      <Filter
        filterText={filterText}
        page={page}
        onFilterChange={handlePageChange}
        showDropdown={showFilterDropdown}
        onFilter={showFilterHandler}
      />

      {page === "1" && (
        <WebDevProjects
          projectData={props.projectData}
          projectImages={props.projectImages}
        />
      )}
      {page === "2" && <Illustrations />}
      {page === "3" && <GraphicDesigns />}
    </div>
  );
};

export default Projects;
