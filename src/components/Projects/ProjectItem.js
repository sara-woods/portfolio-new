import { useNavigate } from "react-router-dom";
import "./ProjectItem.css";

import LinkButton from "../UI/LinkButton";

const ProjectItem = (props) => {
  const navigate = useNavigate();

  let style = {
    backgroundImage: `url(${props.projectImage})`,
  };

  const handleProjectClick = () => {
    navigate(`/${props.projectId}`);
  };

  return (
    <div className="project-container">
      <div className="project-item">
        <div className="image-container" onClick={handleProjectClick}>
          <div className="image" style={style}></div>
        </div>

        <div className="project-info">
          <div className="tech-tags">
            {props.technologies.map((techname) => (
              <div key={techname}>
                <p className="tech-tag">{techname}</p>
              </div>
            ))}
          </div>
          <LinkButton
            to={`/${props.projectId}`}
            id={props.projectId}
            text={props.name}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
