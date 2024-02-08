import { Link } from "react-router-dom";
import "./LinkButton.css";

const LinkButton = (props) => {
  return (
    <Link
      to={`/${props.id}`}
      // rel="noopener noreferrer"
      // target="_blank"
      className={`link-button ${props.className}`}
    >
      <span className="mask">
        <div className="link-container">
          <span className="link-title1 title">{props.text}</span>
          <span className="link-title2 title">{props.text}</span>
        </div>
      </span>
      {/* {props.text} */}
      <svg
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_110_1074)">
          <path
            d="M38.9775 17.7787L16.9378 39.8185"
            stroke="#1F1E1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.7167 18.215L38.9779 17.7788L38.5416 36.04"
            stroke="#1F1E1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_110_1074">
            <rect width="55" height="55" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default LinkButton;
