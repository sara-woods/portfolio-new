import ProjectItem from "./ProjectItem";

import whatmovieImage from "../../images/whatmovie_small.png";
import watchdominionImage from "../../images/watchdominion.png";
import cafeImage from "../../images/cafe.png";

const projectData = [
  {
    id: 1,
    name: "Café landing page",
    technologies: [
      "UI Design",
      "Webflow",
    ],
    image: cafeImage,
  },
  {
    id: 12,
    name: "WatchDominion.org",
    technologies: [
      "UI Design",
    ],
    image: watchdominionImage,
  },
  {
    id: 3,
    name: "Movie Generator",
    technologies: [
      "UI Design",
      "React.js",
    ],
    image: whatmovieImage,
  }
]

const UIUXProjects = () => {
  return (
    <>
      {projectData.map((item) => (
        <ProjectItem
          key={item.name}
          name={item.name}
          technologies={item.technologies}
          projectImage={item.image}
        />
      ))}
    </>
  );
};

export default UIUXProjects;
