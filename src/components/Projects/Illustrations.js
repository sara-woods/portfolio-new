import IllustrationItem from "./IllustrationItem";

import bearImage from "../../images/bear.jpg";
import tvImage from "../../images/tv.jpg";
import birdsImage from "../../images/birds.jpg";
import backgammonImage from "../../images/backgammon.jpg";
import basketImage from "../../images/basket.jpg";
import catWereWolfImage from "../../images/catwerewolf.jpg";
import girlImage from "../../images/girl.jpg";
import faceImage from "../../images/face.jpg";
import clownImage from "../../images/pennywise.jpg";
import vansImage from "../../images/vans.jpg";
import abcImage from "../../images/abc.jpg";

const Illustrations = (props) => {
  return (
    <>
      <div>
        <IllustrationItem src={tvImage} alt="illustration" />
        <IllustrationItem src={backgammonImage} alt="illustration" />
        <IllustrationItem src={birdsImage} alt="illustration" />
        <IllustrationItem src={bearImage} alt="illustration" />
        <IllustrationItem src={vansImage} alt="illustration" />
        <IllustrationItem src={catWereWolfImage} alt="illustration" />
        <IllustrationItem src={faceImage} alt="illustration" />
        <IllustrationItem src={abcImage} alt="illustration" />
        <IllustrationItem src={basketImage} alt="illustration" />
        <IllustrationItem src={girlImage} alt="illustration" />
        <IllustrationItem src={clownImage} alt="illustration" />
      </div>
    </>
  );
};

export default Illustrations;
