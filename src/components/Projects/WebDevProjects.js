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

      {/* <ProjectItem
        name={t("projectData.whatmovie.name")}
        type={t("projectData.whatmovie.type")}
        description={t("projectData.whatmovie.description")}
        webLink={t("projectData.whatmovie.web")}
        repoLink={t("projectData.whatmovie.repo")}
        technologies={projectData.whatmovie.technologies}
        projectImage={whatmovieImage}
      />
      <ProjectItem
        name={t("projectData.wellsy.name")}
        type={t("projectData.wellsy.type")}
        description={t("projectData.wellsy.description")}
        webLink={t("projectData.wellsy.web")}
        repoLink={t("projectData.wellsy.repo")}
        technologies={projectData.wellsy.technologies}
        projectImage={wellsyImage}
      />
      <ProjectItem
        name={t("projectData.packathon.name")}
        type={t("projectData.packathon.type")}
        description={t("projectData.packathon.description")}
        webLink={t("projectData.packathon.web")}
        repoLink={t("projectData.packathon.repo")}
        technologies={projectData.packathon.technologies}
        projectImage={packathonImage}
      />
      <ProjectItem
        name={t("projectData.catsweeper.name")}
        type={t("projectData.catsweeper.type")}
        description={t("projectData.catsweeper.description")}
        webLink={t("projectData.catsweeper.web")}
        repoLink={t("projectData.catsweeper.repo")}
        technologies={projectData.catsweeper.technologies}
        projectImage={catsweeperImage}
      />
      <ProjectItem
        name={t("projectData.floatify.name")}
        type={t("projectData.floatify.type")}
        description={t("projectData.floatify.description")}
        webLink={t("projectData.floatify.web")}
        repoLink={t("projectData.floatify.repo")}
        technologies={projectData.floatify.technologies}
        projectImage={floatifyImage}
      /> */}
    </>
  );
};

export default WebDevProjects;
