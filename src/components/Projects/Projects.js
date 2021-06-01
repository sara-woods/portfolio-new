import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = (props) => {
  return (
    <div id="projects">
      <h1 className="mb-3">Projects</h1>
      <ProjectItem projectData={props.projectData[0]} projectImage={props.projectImages.whatmovieImage} />
      <ProjectItem projectData={props.projectData[1]} projectImage={props.projectImages.catsweeperImage}/>
      <ProjectItem projectData={props.projectData[2]} projectImage={props.projectImages.packathonImage}/>
      <ProjectItem projectData={props.projectData[3]} projectImage={props.projectImages.wellsyImage}/>
      <ProjectItem projectData={props.projectData[4]} projectImage={props.projectImages.floatifyImage}/>
    </div>
  )
}

export default Projects;