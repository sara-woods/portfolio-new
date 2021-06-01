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
    <div className="project-container">   

      <div className="project-item">

      
        <p className="text-orange text-sm">Team Project</p>
        <h2 className="text-700 mb-3 mt-1">Wellsy</h2>

        <div className="image-container">
          <div className="image" style={style}></div>
        </div>


  

          <div className="project-info">
            <p className="project-text text-sm text-300">Movie generator built on React and a Rails backend API. Users can generate a random movie or filter the result based on release year, rating and genres.</p>
            
            <div className="tech-tags">
              <div><p className="tech-tag">Ruby on Rails</p></div>
              <div><p className="tech-tag">HTML/SCSS</p></div>
              <div><p className="tech-tag">JavaScript (ES6)</p></div>
              <div><p className="tech-tag">Stripe</p></div>
              <div><p className="tech-tag">Heroku</p></div>
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