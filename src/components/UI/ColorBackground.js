import "./ColorBackground.css";

const ColorBackground = (props) => {
  return (
    <div
      id={props.id}
      className={`color-background ${props.className}`}
      style={{ background: props.backgroundColor }}
    >
      {props.children}
    </div>
  );
};

export default ColorBackground;
