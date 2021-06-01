import ProjectItemLeft from './ProjectItemLeft';
import './Projects.css';

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="mb-3">Projects</h1>
      <ProjectItemLeft />
      <ProjectItemLeft />
    </div>
  )
}

export default Projects;