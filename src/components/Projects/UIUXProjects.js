import ProjectItem from "./ProjectItem";

import whatmovieImage from "../../images/whatmovie_small.png";
import watchdominionImage from "../../images/watchdominion.png";
import cafeImage from "../../images/cafe.png";

const projectData = [
  {
    id: 1,
    projectId: "uxjobsboard",
    name: "UX Jobs Board",
    technologies: ["UX Research", "UX Design", "UI Design"],
    image: cafeImage,
  },
  {
    id: 2,
    projectId: "moviegenerator",
    name: "Movie Generator",
    technologies: ["UI Design", "ReactJS"],
    image: whatmovieImage,
  },
  {
    id: 3,
    projectId: "watchdominion",
    name: "WatchDominion.org",
    technologies: ["UI Design"],
    image: watchdominionImage,
  },
  {
    id: 4,
    projectId: "cafe",
    name: "Café landing page",
    technologies: ["UI Design", "Webflow"],
    image: cafeImage,
  },
];

const UIUXProjects = () => {
  return (
    <>
      {projectData.map((item) => (
        <ProjectItem
          key={item.id}
          projectId={item.projectId}
          name={item.name}
          technologies={item.technologies}
          projectImage={item.image}
        />
      ))}
    </>
  );
};

export default UIUXProjects;
