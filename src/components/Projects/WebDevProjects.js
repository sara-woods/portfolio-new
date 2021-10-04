import ProjectItem from "./ProjectItem";

const WebDevProjects = (props) => {
  return (
    <>
      <ProjectItem
        projectData={props.projectData[0]}
        projectImage={props.projectImages.whatmovieImage}
      />
      <ProjectItem
        projectData={props.projectData[1]}
        projectImage={props.projectImages.wellsyImage}
      />
      <ProjectItem
        projectData={props.projectData[2]}
        projectImage={props.projectImages.packathonImage}
      />
      <ProjectItem
        projectData={props.projectData[3]}
        projectImage={props.projectImages.catsweeperImage}
      />
      <ProjectItem
        projectData={props.projectData[4]}
        projectImage={props.projectImages.floatifyImage}
      />
    </>
  );
};

export default WebDevProjects;
