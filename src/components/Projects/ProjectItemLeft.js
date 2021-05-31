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
    <div className="project-item">

    
      <p className="text-orange">Team Project</p>
      <h2 className="text-700 mb-3 mt-1">Wellsy</h2>

      <div className="project-img">
        <div className="image" style={style}></div>
      </div>


      <div className="project">
        <div className="project-info">
          <p className="project-text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occ</p>
          
          <div className="d-flex mt-3">
            <div className="ml-5">
              <ul className="text-orange">
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>JavaScript (ES6+)</span></li>
              </ul>
            </div>
            <div>
              <ul className="text-orange">
                <li><span>React</span></li>
                <li><span>Ruby on Rails</span></li>
              </ul>
            </div>
          </div>
          <div className="links d-flex">
            <a href="https://floatifyapp.herokuapp.com" target="_blank" rel="noopener noreferrer"><p className="text-orange text-md"><FontAwesomeIcon icon={faExternalLinkSquareAlt} /></p></a>
            <a href="https://github.com/saralotfi/float_boat" target="_blank" rel="noopener noreferrer"><p className="text-orange text-md"><FontAwesomeIcon icon={faGithubSquare} /></p></a>
          </div>
        </div>

 
      </div>

    </div>
  )
}

export default ProjectItemLeft;