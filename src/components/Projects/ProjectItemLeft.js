import './ProjectItemLeft.css';
import pic from "../../images/meta-img.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';


const ProjectItemLeft = (props) => {

  let style = {
    backgroundImage: `url(${pic})`
  }

  return (
    <div className="project-container">   
      <div className={`project-item ${props.projectData.id % 2 === 0 ? "bg-green" : "bg-blue"}`}>

        <p className="text-orange text-sm">{props.projectData.type}</p>
        <h2 className="text-700 mb-3 mt-1">{props.projectData.name}</h2>

        <div className="image-container">
          <div className="image" style={style}></div>
        </div>

          <div className="project-info">
            <p className="project-text text-sm text-300">{props.projectData.description}</p>
            
            <div className="tech-tags">
              {props.projectData.technologies.map ((techname) => <div key={techname}><p className="tech-tag">{techname}</p></div>)}
            </div>

            <div className="links d-flex">
              <a href={props.projectData.web} target="_blank" rel="noopener noreferrer"><p className="text-orange text-md"><FontAwesomeIcon icon={faExternalLinkSquareAlt} /></p></a>
              <a href={props.projectData.repo} target="_blank" rel="noopener noreferrer"><p className="text-orange text-md"><FontAwesomeIcon icon={faGithubSquare} /></p></a>
            </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectItemLeft;