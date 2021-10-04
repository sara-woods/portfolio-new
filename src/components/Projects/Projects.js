import "./Projects.css";
import WebDevProjects from "./WebDevProjects";
import Illustrations from "./Illustrations";
import GraphicDesign from "./GraphicDesign";

const Projects = (props) => {
  console.log(props.projectData);
  return (
    <div id="projects">
      <h1 className="mb-3">Projects</h1>
      <WebDevProjects
        projectData={props.projectData}
        projectImages={props.projectImages}
      />
      <Illustrations />
      <GraphicDesign />
    </div>
  );
};

export default Projects;
