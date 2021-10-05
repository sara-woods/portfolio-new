import "./IllustrationItem.css";

const IllustrationItem = (props) => {
  return (
    <div className="illustration-container">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default IllustrationItem;
