import "./ProjectItem.css";
import Button from "../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { contentData } from "../../contentData";

const ProjectItem = (props) => {
  let style = {
    backgroundImage: `url(${props.projectImage})`,
  };

  return (
    <div className="project-container">
      <div className="project-item">
        <p className="text-orange text-sm">{props.projectData.type}</p>
        <div className="d-flex justify-content-between align-items-end">
          <h2 className="text-700 mb-3 mt-1">{props.projectData.name}</h2>
          <a
            href={props.projectData.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 tab-link"
          >
            <p className="text-orange">
              <FontAwesomeIcon icon={faGithubSquare} className="text-lg link" />
            </p>
          </a>
        </div>

        <div className="image-container">
          <div className="image" style={style}></div>
        </div>

        <div className="project-info">
          <p className="project-text text-sm text-300">
            {props.projectData.description}
          </p>

          <div className="tech-tags">
            {props.projectData.technologies.map((techname) => (
              <div key={techname}>
                <p className="tech-tag">{techname}</p>
              </div>
            ))}
          </div>
          <Button
            text={contentData.buttonText.visit}
            href={props.projectData.web}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
