import { useParams } from "react-router-dom";

import UXJobsBoard from "./ProjectPages/UXJobsBoard";
import MovieGenerator from "./ProjectPages/MovieGenerator";
import ErrorPage from "../../ErrorPage";

const projects = ["uxjobsboard", "moviegenerator", "watchdominion", "cafe"];

const ProjectPage = () => {
  const params = useParams();
  let missingProjectPage = false;
  console.log(params);

  if (!projects.find((project) => project === params.projectId)) {
    missingProjectPage = true;
    console.log("true");
  }

  return (
    <div className="">
      {missingProjectPage && <ErrorPage />}
      {params.projectId === "uxjobsboard" && <UXJobsBoard />}
      {params.projectId === "moviegenerator" && <MovieGenerator />}
    </div>
  );
};

export default ProjectPage;
