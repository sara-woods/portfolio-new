import IllustrationItem from "./IllustrationItem";

import babyImage from "../../images/bottlesandbows.jpg";
import inkImage from "../../images/brewed-ink.jpg";
import keywahImage from "../../images/keywah.jpg";
import lbImage from "../../images/lightbrigade.jpg";
import lo88Image from "../../images/LO88.jpg";
import paddleImage from "../../images/paddleboards.jpg";
import rosesImage from "../../images/roses.jpg";
import sweetImage from "../../images/sweet-adventure.jpg";

const GraphicDesigns = (props) => {
  return (
    <>
      <div>
        <IllustrationItem src={inkImage} alt="publisher logo design" />
        <IllustrationItem src={babyImage} alt="baby boutique logo design" />
        <IllustrationItem src={lbImage} alt="photography logo design" />
        <IllustrationItem src={keywahImage} alt="beachy logo design" />
        <IllustrationItem src={lo88Image} alt="outdoors logo design" />
        <IllustrationItem src={paddleImage} alt="paddle board logo design" />
        <IllustrationItem src={rosesImage} alt="t-shirt design with roses" />
        <IllustrationItem src={sweetImage} alt="soap logo design" />
      </div>
    </>
  );
};

export default GraphicDesigns;
