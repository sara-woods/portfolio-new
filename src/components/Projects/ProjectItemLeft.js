import './ProjectItemLeft.css';
import pic from "../../images/meta-img.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';


const ProjectItemLeft = () => {

  let style = {
    backgroundImage: `url(${pic})`
  }

  return (
    <div className="project-item-left d-flex">
      <div className="project-info">
        <p className="text-orange">Team Project</p>
        <h2 className="text-700">Wellsy</h2>
        <p className="project-text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occ</p>
        <a href="https://github.com/saralotfi/float_boat" target="_blank" rel="noopener noreferrer"><p><FontAwesomeIcon icon={faGithubSquare} /></p></a>
        <a href="https://floatifyapp.herokuapp.com" target="_blank" rel="noopener noreferrer"><p><FontAwesomeIcon icon={faExternalLinkSquareAlt} /></p></a>
      </div>
      <div className="project-img">
        <div className="image" style={style}></div>
      </div>

    </div>
  )
}

export default ProjectItemLeft;