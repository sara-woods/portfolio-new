import "./ColorSwatch.css";

const ColorSwatch = (props) => {
  return (
    <div className="swatch-container">
      <div
        className="color-container"
        style={{ backgroundColor: props.backgroundColor }}
      ></div>
      <div className="hex-container">
        <p className="weight-600">{props.hex}</p>
        <p className="text-grey">{props.name}</p>
      </div>
    </div>
  );
};

export default ColorSwatch;
