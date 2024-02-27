import ProjectItem from "./ProjectItem";

import movieImage from "../../images/Movie/movie-cover-image.jpg";
import watchdominionImage from "../../images/WatchDominion/watchdominion-cover-image.png";
import cafeImage from "../../images/Cafe/cafe-cover-image.png";
import uxjobsboardImage from "../../images/UXjobsboard/uxjobsboard-cover-image.png";

const projectData = [
  {
    id: 1,
    projectId: "uxjobsfinder",
    name: "UX Jobs Board",
    technologies: ["UX Research", "UX Design", "UI Design"],
    image: uxjobsboardImage,
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
