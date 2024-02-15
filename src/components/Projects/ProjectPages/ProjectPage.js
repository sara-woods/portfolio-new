import { useParams } from "react-router-dom";
import "./ProjectPage.css";

import UXJobsBoard from "./UXJobsBoard";
import MovieGenerator from "./MovieGenerator";
import ErrorPage from "../../../ErrorPage";
import WatchDominion from "./WatchDomionion";
import Cafe from "./Cafe";

const projects = ["uxjobsfinder", "moviegenerator", "watchdominion", "cafe"];

const ProjectPage = () => {
  const params = useParams();
  let missingProjectPage = false;

  if (!projects.find((project) => project === params.projectId)) {
    missingProjectPage = true;
  }

  return (
    <div className="">
      {missingProjectPage && <ErrorPage />}
      {params.projectId === "uxjobsfinder" && <UXJobsBoard />}
      {params.projectId === "moviegenerator" && <MovieGenerator />}
      {params.projectId === "watchdominion" && <WatchDominion />}
      {params.projectId === "cafe" && <Cafe />}
    </div>
  );
};

export default ProjectPage;
