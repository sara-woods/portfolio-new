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
