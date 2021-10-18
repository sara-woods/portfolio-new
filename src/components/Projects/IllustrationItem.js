import "./IllustrationItem.css";

const IllustrationItem = (props) => {
  const handleRightClick = (event) => {
    event.preventDefault();
  };

  const handleDrag = (event) => {
    event.preventDefault();
  };

  return (
    <div className="illustration-container">
      <img
        onContextMenu={handleRightClick}
        onDragStart={handleDrag}
        className="illustration"
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
};

export default IllustrationItem;
