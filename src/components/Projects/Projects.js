// import { useContext } from "react";
import "./Projects.css";
import UIUXProjects from "./UIUXProjects";
// import Illustrations from "./Illustrations";
// import GraphicDesigns from "./GraphicDesigns";
// import Filter from "./Filter";
// import ProjectContext from "../../store/project-context";

const Projects = () => {
  // const ctx = useContext(ProjectContext);
  // let filterText;
  // const filterOptions = {
  //   header: "Filter Content",
  //   webDev: "Web development/design",
  //   illustrations: "Illustrations",
  //   graphicDesign: "Graphic design",
  // }

  // switch (ctx.page) {
  //   case "1":
  //     filterText = filterOptions.webDev;
  //     break;
  //   case "2":
  //     filterText = filterOptions.illustrations;
  //     break;
  //   case "3":
  //     filterText = filterOptions.graphicDesign;
  //     break;
  //   default:
  //     filterText = filterOptions.webDev;
  // }

  return (
    <div className="main-container scroll-anchor" id="scroll-projects">
      <h1>Web Projects</h1>
      <UIUXProjects />
      {/* <Filter filterText={filterText} /> */}
      {/* {ctx.page === "1" && <WebDevProjects />}
        {ctx.page === "2" && <Illustrations />}
        {ctx.page === "3" && <GraphicDesigns />} */}
    </div>
  );
};

export default Projects;
