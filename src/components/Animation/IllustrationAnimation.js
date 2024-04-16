import WrapperBackground from "../UI/WrapperBackground";
import LinkButton from "../UI/LinkButton";
import AnimationImage from "./AnimationImage";
import "./IllustrationAnimation.css";

import bearImage from "../../images/Illustrations/bear.jpg";
import tvImage from "../../images/Illustrations/tv.jpg";
import birdsImage from "../../images/Illustrations/birds.jpg";
import backgammonImage from "../../images/Illustrations/backgammon.jpg";
import basketImage from "../../images/Illustrations/basket.jpg";
import catWereWolfImage from "../../images/Illustrations/catwerewolf.jpg";
import campingImage from "../../images/Illustrations/camping.jpg";
import cat_turnaroundImage from "../../images/Illustrations/cat_turnaround.gif";
import duckImage from "../../images/Illustrations/duck.gif";
import girlImage from "../../images/Illustrations/girl.jpg";
import pennywiseImage from "../../images/Illustrations/pennywise.jpg";
import vansImage from "../../images/Illustrations/vans.jpg";
import beachImage from "../../images/Illustrations/beach.jpg";
import rosesImage from "../../images/Illustrations/roses.jpg";
import soapImage from "../../images/Illustrations/soap.jpg";
import publishingImage from "../../images/Illustrations/publishing.jpg";
import photographyImage from "../../images/Illustrations/photography.jpg";
import paddleboardsImage from "../../images/Illustrations/paddleboards.jpg";
import babyImage from "../../images/Illustrations/baby.jpg";

const IllustrationAnimation = () => {
  return (
    <WrapperBackground id="wrapper-animation" backgroundColor="#dbd7d7">
      <div
        className="main-container extra-bottom-padding"
        id="scroll-illustration"
      >
        <h1>Illustration & graphic design</h1>
        <div className="animation-mask">
          <div className="animation-column">
            <AnimationImage src={beachImage} />
            <AnimationImage src={cat_turnaroundImage} />
            <AnimationImage src={bearImage} />
            <AnimationImage src={photographyImage} />
            <AnimationImage src={duckImage} />
            <AnimationImage src={vansImage} />
            <AnimationImage src={birdsImage} />
            <AnimationImage src={soapImage} />
            <AnimationImage src={rosesImage} />
            <AnimationImage src={girlImage} />
            <AnimationImage src={publishingImage} />
            <AnimationImage src={pennywiseImage} />
            <AnimationImage src={backgammonImage} />
            <AnimationImage src={campingImage} />
            <AnimationImage src={catWereWolfImage} />
            <AnimationImage src={basketImage} />
            <AnimationImage src={paddleboardsImage} />
            <AnimationImage src={babyImage} />
            <AnimationImage src={tvImage} />
          </div>
          <div className="animation-column" id="column-2">
            <AnimationImage src={beachImage} />
            <AnimationImage src={cat_turnaroundImage} />
            <AnimationImage src={photographyImage} />
            <AnimationImage src={birdsImage} />
            <AnimationImage src={babyImage} />
            <AnimationImage src={publishingImage} />
            <AnimationImage src={bearImage} />
            <AnimationImage src={rosesImage} />
            <AnimationImage src={campingImage} />
            <AnimationImage src={duckImage} />
            <AnimationImage src={vansImage} />
            <AnimationImage src={catWereWolfImage} />
            <AnimationImage src={pennywiseImage} />
            <AnimationImage src={backgammonImage} />
            <AnimationImage src={soapImage} />
            <AnimationImage src={basketImage} />
            <AnimationImage src={paddleboardsImage} />
            <AnimationImage src={tvImage} />
            <AnimationImage src={girlImage} />
          </div>
          <div className="animation-column">
            <AnimationImage src={catWereWolfImage} />
            <AnimationImage src={birdsImage} />
            <AnimationImage src={tvImage} />
            <AnimationImage src={bearImage} />
            <AnimationImage src={cat_turnaroundImage} />
            <AnimationImage src={soapImage} />
            <AnimationImage src={backgammonImage} />
            <AnimationImage src={beachImage} />
            <AnimationImage src={babyImage} />
            <AnimationImage src={pennywiseImage} />
            <AnimationImage src={paddleboardsImage} />
            <AnimationImage src={photographyImage} />
            <AnimationImage src={vansImage} />
            <AnimationImage src={publishingImage} />
            <AnimationImage src={basketImage} />
            <AnimationImage src={campingImage} />
            <AnimationImage src={girlImage} />
            <AnimationImage src={duckImage} />
            <AnimationImage src={rosesImage} />
          </div>
        </div>
        <LinkButton
          to="/illustration"
          id="illustration"
          text="See more"
          className=""
        />
      </div>
    </WrapperBackground>
  );
};

export default IllustrationAnimation;
