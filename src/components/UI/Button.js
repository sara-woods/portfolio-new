import "./Button.css";

const Button = (props) => {
  return (
    <a
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
      className={`button-pill text-sm ${props.className}`}
    >
      {props.text}
    </a>
  );
};

export default Button;
