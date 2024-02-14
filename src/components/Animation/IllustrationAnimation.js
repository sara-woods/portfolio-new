import WrapperBackground from "../UI/WrapperBackground";
import LinkButton from "../UI/LinkButton";
import AnimationImage from "./AnimationImage";
import "./IllustrationAnimation.css";

import bearImage from "../../images/bear.jpg";
import tvImage from "../../images/tv.jpg";
import birdsImage from "../../images/birds.jpg";
import backgammonImage from "../../images/backgammon.jpg";
import basketImage from "../../images/basket.jpg";
import catWereWolfImage from "../../images/catwerewolf.jpg";
import campingImage from "../../images/camping.jpg";
import cat_turnaroundImage from "../../images/cat_turnaround.gif";
import duckImage from "../../images/duck.gif";
import faceImage from "../../images/face.jpg";
import girlImage from "../../images/girl.jpg";
import pennywiseImage from "../../images/pennywise.jpg";
import vansImage from "../../images/vans.jpg";
import abcImage from "../../images/abc.jpg";
import beachImage from "../../images/beach.jpg";
import rosesImage from "../../images/roses.jpg";
import soapImage from "../../images/soap.jpg";
import publishingImage from "../../images/publishing.jpg";
import photographyImage from "../../images/photography.jpg";
import paddleboardsImage from "../../images/paddleboards.jpg";
import babyImage from "../../images/baby.jpg";

const IllustrationAnimation = () => {
  return (
    <WrapperBackground id="wrapper-animation" backgroundColor="#dbd7d7">
      <div
        className="main-container extra-bottom-padding"
        id="scroll-illustration"
      >
        <h1>Illustration & logo design</h1>
        <div className="animation-mask">
          <div className="animation-column">
            <AnimationImage src={beachImage} />
            <AnimationImage src={cat_turnaroundImage} />
            <AnimationImage src={bearImage} />
            <AnimationImage src={duckImage} />
            <AnimationImage src={vansImage} />
            <AnimationImage src={birdsImage} />
            <AnimationImage src={soapImage} />
            <AnimationImage src={rosesImage} />
            <AnimationImage src={girlImage} />
            <AnimationImage src={photographyImage} />
            <AnimationImage src={faceImage} />
            <AnimationImage src={abcImage} />
            <AnimationImage src={publishingImage} />
            <AnimationImage src={pennywiseImage} />
            <AnimationImage src={backgammonImage} />
            <AnimationImage src={catWereWolfImage} />
            <AnimationImage src={paddleboardsImage} />
            <AnimationImage src={campingImage} />
            <AnimationImage src={basketImage} />
            <AnimationImage src={babyImage} />
            <AnimationImage src={tvImage} />
          </div>
          <div className="animation-column" id="column-2">
            <AnimationImage src={beachImage} />
            <AnimationImage src={cat_turnaroundImage} />
            <AnimationImage src={birdsImage} />
            <AnimationImage src={babyImage} />
            <AnimationImage src={paddleboardsImage} />
            <AnimationImage src={photographyImage} />
            <AnimationImage src={publishingImage} />
            <AnimationImage src={bearImage} />
            <AnimationImage src={rosesImage} />
            <AnimationImage src={campingImage} />
            <AnimationImage src={duckImage} />
            <AnimationImage src={faceImage} />
            <AnimationImage src={vansImage} />
            <AnimationImage src={pennywiseImage} />
            <AnimationImage src={backgammonImage} />
            <AnimationImage src={soapImage} />
            <AnimationImage src={catWereWolfImage} />
            <AnimationImage src={basketImage} />
            <AnimationImage src={abcImage} />
            <AnimationImage src={tvImage} />
            <AnimationImage src={girlImage} />
          </div>
          <div className="animation-column">
            <AnimationImage src={catWereWolfImage} />
            <AnimationImage src={birdsImage} />
            <AnimationImage src={duckImage} />
            <AnimationImage src={tvImage} />
            <AnimationImage src={bearImage} />
            <AnimationImage src={faceImage} />
            <AnimationImage src={abcImage} />
            <AnimationImage src={vansImage} />
            <AnimationImage src={cat_turnaroundImage} />
            <AnimationImage src={pennywiseImage} />
            <AnimationImage src={backgammonImage} />
            <AnimationImage src={beachImage} />
            <AnimationImage src={babyImage} />
            <AnimationImage src={paddleboardsImage} />
            <AnimationImage src={photographyImage} />
            <AnimationImage src={publishingImage} />
            <AnimationImage src={soapImage} />
            <AnimationImage src={campingImage} />
            <AnimationImage src={basketImage} />
            <AnimationImage src={girlImage} />
            <AnimationImage src={rosesImage} />
          </div>
        </div>
        <LinkButton id="illustrations" text="See more" className="" />
      </div>
    </WrapperBackground>
  );
};

export default IllustrationAnimation;
