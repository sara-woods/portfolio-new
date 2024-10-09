import LinkButton from "../UI/LinkButton";
import AnimationImage from "./AnimationImage";
import ColorBackground from "../UI/ColorBackground";
import "./IllustrationAnimation.css";

import bearImage from "../../images/Illustrations/bear.jpg";
import tvImage from "../../images/Illustrations/tv.jpg";
import birdsImage from "../../images/Illustrations/birds.jpg";
import backgammonImage from "../../images/Illustrations/backgammon.jpg";
import basketImage from "../../images/Illustrations/basket.jpg";
import catWereWolfImage from "../../images/Illustrations/catwerewolf.jpg";
import campingImage from "../../images/Illustrations/camping.jpg";
import pennywiseImage from "../../images/Illustrations/pennywise.jpg";
import vansImage from "../../images/Illustrations/vans.jpg";
import beachImage from "../../images/Illustrations/beach.jpg";
import rosesImage from "../../images/Illustrations/roses.jpg";
import publishingImage from "../../images/Illustrations/publishing.jpg";
import photographyImage from "../../images/Illustrations/photography.jpg";
import babyImage from "../../images/Illustrations/baby.jpg";
import reddotImage from "../../images/Illustrations/thereddot.jpg";
import swansImage from "../../images/Illustrations/swans.jpg";
import movieImage from "../../images/Movie/movie-cover-image.jpg";
import watchdominionImage from "../../images/WatchDominion/watchdominion-cover-image.png";
import cafeImage from "../../images/Cafe/cafe-cover-image.png";
import uxjobsboardImage from "../../images/UXjobsboard/uxjobsboard-cover-image.png";
import trickortreatImage from "../../images/Illustrations/trickortreat_small.jpg";
import tattooImage from "../../images/Illustrations/tattoo_small.jpg";
import donutImage from "../../images/Illustrations/donutmesswithme_small.jpg";

const IllustrationAnimation = () => {
  return (
    <ColorBackground backgroundColor="#F4EFEC">
      <div className="main-container" id="scroll-illustration">
        <h1>Portfolio</h1>
        <div className="animation-mask">
          <div className="animation-column">
            <AnimationImage src={beachImage} />
            <AnimationImage src={swansImage} />
            <AnimationImage src={uxjobsboardImage} />
            <AnimationImage src={tattooImage} />
            <AnimationImage src={trickortreatImage} />
            <AnimationImage src={bearImage} />
            <AnimationImage src={donutImage} />
            <AnimationImage src={movieImage} />
            <AnimationImage src={photographyImage} />
            <AnimationImage src={cafeImage} />
            <AnimationImage src={vansImage} />
            <AnimationImage src={reddotImage} />
            <AnimationImage src={birdsImage} />
            <AnimationImage src={rosesImage} />
            <AnimationImage src={publishingImage} />
            <AnimationImage src={pennywiseImage} />
            <AnimationImage src={backgammonImage} />
            <AnimationImage src={campingImage} />
            <AnimationImage src={watchdominionImage} />
            <AnimationImage src={catWereWolfImage} />
            <AnimationImage src={basketImage} />
            <AnimationImage src={babyImage} />
            <AnimationImage src={tvImage} />
          </div>
          <div className="animation-column" id="column-2">
            <AnimationImage src={beachImage} />
            <AnimationImage src={trickortreatImage} />
            <AnimationImage src={photographyImage} />
            <AnimationImage src={birdsImage} />
            <AnimationImage src={babyImage} />
            <AnimationImage src={watchdominionImage} />
            <AnimationImage src={bearImage} />
            <AnimationImage src={swansImage} />
            <AnimationImage src={uxjobsboardImage} />
            <AnimationImage src={donutImage} />
            <AnimationImage src={reddotImage} />
            <AnimationImage src={publishingImage} />
            <AnimationImage src={rosesImage} />
            <AnimationImage src={campingImage} />
            <AnimationImage src={catWereWolfImage} />
            <AnimationImage src={pennywiseImage} />
            <AnimationImage src={movieImage} />
            <AnimationImage src={backgammonImage} />
            <AnimationImage src={tattooImage} />
            <AnimationImage src={basketImage} />
            <AnimationImage src={cafeImage} />
            <AnimationImage src={vansImage} />
            <AnimationImage src={tvImage} />
          </div>
          <div className="animation-column">
            <AnimationImage src={catWereWolfImage} />
            <AnimationImage src={birdsImage} />
            <AnimationImage src={reddotImage} />
            <AnimationImage src={tattooImage} />
            <AnimationImage src={tvImage} />
            <AnimationImage src={tattooImage} />
            <AnimationImage src={uxjobsboardImage} />
            <AnimationImage src={backgammonImage} />
            <AnimationImage src={beachImage} />
            <AnimationImage src={watchdominionImage} />
            <AnimationImage src={movieImage} />
            <AnimationImage src={trickortreatImage} />
            <AnimationImage src={pennywiseImage} />
            <AnimationImage src={photographyImage} />
            <AnimationImage src={vansImage} />
            <AnimationImage src={bearImage} />
            <AnimationImage src={publishingImage} />
            <AnimationImage src={campingImage} />
            <AnimationImage src={basketImage} />
            <AnimationImage src={cafeImage} />
            <AnimationImage src={donutImage} />
            <AnimationImage src={swansImage} />
            <AnimationImage src={rosesImage} />
          </div>
        </div>
        <LinkButton
          to="/webprojects"
          id="webprojects"
          text="See more web projects"
          className="link-button-mb"
        />
        <LinkButton
          to="/illustration"
          id="illustration"
          text="See more illustrations"
          className="link-button-mb"
        />
        <LinkButton
          to="/graphicdesign"
          id="graphicdesign"
          text="See more graphic design"
          className=""
        />
      </div>
    </ColorBackground>
  );
};

export default IllustrationAnimation;
