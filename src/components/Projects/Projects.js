import { useState } from "react";
import "./Projects.css";
import WebDevProjects from "./WebDevProjects";
import Illustrations from "./Illustrations";
import GraphicDesign from "./GraphicDesign";

import Filter from "./Filter";

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
      filterText = "Web Development";
      break;
    case "2":
      filterText = "Illustrations";
      break;
    case "3":
      filterText = "Logo/Web Design";
      break;
    default:
      filterText = "Web Development";
  }

  return (
    <div id="projects">
      <div id="projects-anchor"></div>
      <h1 className="mb-5 header scroll-anchor">Projects</h1>

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
      {page === "3" && <GraphicDesign />}
    </div>
  );
};

export default Projects;
