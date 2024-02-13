import ProjectItem from "./ProjectItem";

import movieImage from "../../images/Movie/movie-cover-image.png";
import watchdominionImage from "../../images/watchdominion.png";
import cafeImage from "../../images/Cafe/cafe-cover-image.png";

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
    image: movieImage,
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
