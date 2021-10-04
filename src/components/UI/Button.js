import "./Button.css";

const Button = (props) => {
  return <button className="button-pill text-sm">{props.text}</button>;
};

export default Button;
