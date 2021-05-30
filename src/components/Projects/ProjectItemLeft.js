import './ProjectItemLeft.css';

const ProjectItemLeft = () => {

  let style = {
    backgroundImage: `url(https://picsum.photos/seed/picsum/200/300)`
  }

  return (
    <div class="project-item-left">
      <p className="text-orange">Team Project</p>
      <h2 className="text-700">Wellsy</h2>
      <p className="project-text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occ</p>
      <div className="project-image" style={style}></div>

    </div>
  )
}

export default ProjectItemLeft;