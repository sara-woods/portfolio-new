import { useState } from "react";
import "./Projects.css";
import WebDevProjects from "./WebDevProjects";
import Illustrations from "./Illustrations";
import GraphicDesign from "./GraphicDesign";

const Projects = (props) => {
  const [page, setPage] = useState("1");

  const handlePageChange = (event) => {
    setPage(event.target.dataset.page);
  };

  return (
    <div id="projects">
      <div id="projects-anchor"></div>
      <h1 className="mb-5">Projects</h1>
      <div className="tabs">
        <p
          data-page="1"
          className={`tab ${page === "1" ? "underline" : ""}`}
          onClick={handlePageChange}
        >
          Web Development
        </p>
        <p
          data-page="2"
          className={`tab ${page === "2" ? "underline" : ""}`}
          onClick={handlePageChange}
        >
          Illustrations
        </p>
        <p
          data-page="3"
          className={`tab ${page === "3" ? "underline" : ""}`}
          onClick={handlePageChange}
        >
          Logos/Web Design
        </p>
      </div>
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
