import "./ColorBackground.css";

const ColorBackground = (props) => {
  console.log(props.backgroundColor);
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
