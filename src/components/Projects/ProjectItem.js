import "./ProjectItem.css";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const ProjectItem = (props) => {
  let style = {
    backgroundImage: `url(${props.projectImage})`,
  };

  return (
    <div className="project-container">
      <div className="project-item">
        <p className="text-orange text-sm">{props.type}</p>
        <div className="d-flex justify-content-between align-items-end">
          <h2 className="text-700 mb-3 mt-1">{props.name}</h2>
          {props.repo !== "" && <a
            href={props.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 tab-link"
          >
            <p className="text-orange">
              <FontAwesomeIcon icon={faGithubSquare} className="text-lg link" />
            </p>
          </a>}
        </div>

        <div className="image-container">
          <div className="image" style={style}></div>
        </div>

        <div className="project-info">
          <p className="project-text text-sm text-300">{props.description}</p>

          <div className="tech-tags">
            {props.technologies.map((techname) => (
              <div key={techname}>
                <p className="tech-tag">{techname}</p>
              </div>
            ))}
          </div>
          {props.web.length !== 0 && <Button
            text={"Visit website"}
            href={props.web}
            className="mt-4"
          />}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
