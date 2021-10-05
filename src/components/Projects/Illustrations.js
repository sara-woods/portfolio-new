import bearImage from "../../images/bear.jpg";
import tvImage from "../../images/tv.jpg";
import birdsImage from "../../images/birds.jpg";
import backgammonImage from "../../images/backgammon.jpg";
import IllustrationItem from "./IllustrationItem";

const Illustrations = (props) => {
  return (
    <>
      <div>
        <IllustrationItem src={bearImage} alt="illustration" />
        <IllustrationItem src={tvImage} alt="illustration" />
        <IllustrationItem src={birdsImage} alt="illustration" />
        <IllustrationItem src={backgammonImage} alt="illustration" />
      </div>
    </>
  );
};

export default Illustrations;
