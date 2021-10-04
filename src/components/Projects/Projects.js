import WebDevProjects from "./WebDevProjects";
import "./Projects.css";

const Projects = (props) => {
  console.log(props.projectData);
  return (
    <div id="projects">
      <h1 className="mb-3">Projects</h1>
      <WebDevProjects
        projectData={props.projectData}
        projectImages={props.projectImages}
      />
    </div>
  );
};

export default Projects;
