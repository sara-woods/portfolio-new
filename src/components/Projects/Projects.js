import { useContext } from "react";
import { useTranslation } from "react-i18next";

import "./Projects.css";
import WebDevProjects from "./WebDevProjects";
import Illustrations from "./Illustrations";
import GraphicDesigns from "./GraphicDesigns";
import Filter from "./Filter";
import ProjectContext from "../../store/project-context";

const Projects = () => {
  const { t } = useTranslation();
  const ctx = useContext(ProjectContext);

  let filterText;

  switch (ctx.page) {
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
      <Filter filterText={filterText} />
      {ctx.page === "1" && <WebDevProjects />}
      {ctx.page === "2" && <Illustrations />}
      {ctx.page === "3" && <GraphicDesigns />}
    </div>
  );
};

export default Projects;
