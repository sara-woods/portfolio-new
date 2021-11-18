import { useTranslation } from "react-i18next";
import ProjectItem from "./ProjectItem";

import whatmovieImage from "../../images/whatmovie_small.png";
import wellsyImage from "../../images/wellsy_new.png";
import floatifyImage from "../../images/floatify_small.png";
import catsweeperImage from "../../images/catsweeper_new.png";
import packathonImage from "../../images/packathon.png";

import { en } from "../../translations/en";

const images = {
  whatmovie: whatmovieImage,
  wellsy: wellsyImage,
  packathon: packathonImage,
  catsweeper: catsweeperImage,
  floatify: floatifyImage,
};

const projectData = en.translation.projectData;

const WebDevProjects = (props) => {
  const { t } = useTranslation();

  const projectAarray = [];

  for (const property in projectData) {
    projectAarray.push({
      name: t(`projectData.${property}.name`),
      description: t(`projectData.${property}.description`),
      type: t(`projectData.${property}.type`),
      web: t(`projectData.${property}.web`),
      repo: t(`projectData.${property}.repo`),
      technologies: projectData[`${property}`].technologies,
      image: images[`${property}`],
    });
  }

  return (
    <>
      {projectAarray.map((item) => (
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
