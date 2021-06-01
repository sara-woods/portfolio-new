import ProjectItemLeft from './ProjectItemLeft';
import './Projects.css';

const Projects = (props) => {
  return (
    <div id="projects">
      <h1 className="mb-3">Projects</h1>
      <ProjectItemLeft projectData={props.projectData[0]} />
      <ProjectItemLeft projectData={props.projectData[1]} />
      <ProjectItemLeft projectData={props.projectData[2]} />
      <ProjectItemLeft projectData={props.projectData[3]} />
      <ProjectItemLeft projectData={props.projectData[4]} />
    </div>
  )
}

export default Projects;