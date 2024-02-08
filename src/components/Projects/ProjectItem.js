import { Link } from "react-router-dom";
import "./ProjectItem.css";

import LinkButton from "../UI/LinkButton";

const ProjectItem = (props) => {
  let style = {
    backgroundImage: `url(${props.projectImage})`,
  };

  return (
    <div className="project-container">
      <div className="project-item">
        <div className="image-container">
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
          <LinkButton text={props.name} href={props.web} className="" />
        </div>
      </div>
      <Link to={`/${props.projectId}`}>Read more</Link>
    </div>
  );
};

export default ProjectItem;
