import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import WebDevProjects from "./WebDevProjects";
import Illustrations from "./Illustrations";
import GraphicDesigns from "./GraphicDesigns";
import Filter from "./Filter";

const Projects = (props) => {
  const { t } = useTranslation();
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
      filterText = t("filterOptions.webDev");
      break;
    case "2":
      filterText = t("filterOptions.illustrations");
      break;
    case "3":
      filterText = t("filterOptions.graphicDesign");
      break;
    default:
      filterText = t("filterOptions.webDev");
  }

  return (
    <div id="projects">
      <div className="scroll-anchor"></div>
      <h1 className="mb-5 header">{t("navLinks.projects")}</h1>

      <Filter
        filterText={filterText}
        page={page}
        onFilterChange={handlePageChange}
        showDropdown={showFilterDropdown}
        onFilter={showFilterHandler}
      />

      {page === "1" && <WebDevProjects />}
      {page === "2" && <Illustrations />}
      {page === "3" && <GraphicDesigns />}
    </div>
  );
};

export default Projects;
