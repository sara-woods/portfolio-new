import { useTranslation } from "react-i18next";
import ProjectItem from "./ProjectItem";

import whatmovieImage from "../../images/whatmovie_small.png";
import wellsyImage from "../../images/wellsy_new.png";
import floatifyImage from "../../images/floatify_small.png";
import catsweeperImage from "../../images/catsweeper_new.png";
import packathonImage from "../../images/packathon.png";
import watchdominionImage from "../../images/watchdominion.png";
import cafeImage from "../../images/cafe.png";

import { en } from "../../translations/en";
const projectData = en.translation.projectData;

const images = {
  cafe: cafeImage,
  watchdominion: watchdominionImage,
  whatmovie: whatmovieImage,
  wellsy: wellsyImage,
  packathon: packathonImage,
  catsweeper: catsweeperImage,
  floatify: floatifyImage,
};

const WebDevProjects = () => {
  const { t } = useTranslation();

  const projectArray = [];

  for (const property in projectData) {
    projectArray.push({
      name: t(`projectData.${property}.name`),
      description: t(`projectData.${property}.description`),
      type: t(`projectData.${property}.type`),
      web: t(`projectData.${property}.web`),
      repo: t(`projectData.${property}.repo`),
      technologies: t(`projectData.${property}.technologies`,{ returnObjects: true }),
      image: images[`${property}`],
    });
  }

  return (
    <>
      {projectArray.map((item) => (
        <ProjectItem
          key={item.name}
          name={item.name}
          type={item.type}
          description={item.description}
          web={item.web}
          repo={item.repo}
          technologies={item.technologies}
          projectImage={item.image}
        />
      ))}
    </>
  );
};

export default WebDevProjects;
