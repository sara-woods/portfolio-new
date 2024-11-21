import { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import IllustrationItem from "./IllustrationItem";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

import swansImage from "../../../images/Illustrations/swans.jpg";
import bearImage from "../../../images/Illustrations/bear.jpg";
import tvImage from "../../../images/Illustrations/tv.jpg";
import birdsImage from "../../../images/Illustrations/birds.jpg";
import backgammonImage from "../../../images/Illustrations/backgammon.jpg";
import basketImage from "../../../images/Illustrations/basket.jpg";
import catWereWolfImage from "../../../images/Illustrations/catwerewolf.jpg";
import clownImage from "../../../images/Illustrations/pennywise.jpg";
import vansImage from "../../../images/Illustrations/vans.jpg";
import catTurnaround from "../../../images/Illustrations/cat_turnaround.gif";
import duckGif from "../../../images/Illustrations/duck.gif";
import abcImage from "../../../images/Illustrations/Abc.jpg";
import birdsInkImage from "../../../images/Illustrations/birds-ink.jpg";
import trickortreatImage from "../../../images/Illustrations/trickortreat_small.jpg";
import trickortreatGifImage from "../../../images/Illustrations/trickortreat.gif";
import tattooImage from "../../../images/Illustrations/tattoo_small.jpg";
import donutImage from "../../../images/Illustrations/donutmesswithme_small.jpg";
import halloweenpatternImage from "../../../images/Illustrations/halloween-pattern.jpg";

const Illustrations = () => {
  useEffect(() => {
    document.title = "Sara Woods | Illustration";
  }, []);
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-container">
        <h1>Illustration</h1>
        <div className="illustrations-container">
          <IllustrationItem src={halloweenpatternImage} alt="Pattern with halloween realted illustrations" description="Halloween-themed pattern" />
          <IllustrationItem src={donutImage} alt="Illustration of a donut on an 80s bike" description="'Donut mess with me', Stinktober Day 9, 2024" />
          <IllustrationItem
            src={tattooImage}
            alt="Illustration of a tattoo going wrong"
            description="'Bill is getting a tattoo of his belowed nephew Timmy. Too bad he didn't check the reviews of Tattoo City first.' Made for the prompt 'A Really Stupid Tattoo', Stinktober Day 4, 2024"
          />
          <IllustrationItem
            src={trickortreatGifImage}
            alt="Morphing animation spelling out Trick or Treat"
            description="Morphing animation spelling out Trick or Treat, illustrated in Adobe Fresco."
          />
          <IllustrationItem
            src={trickortreatImage}
            alt="Hand-lettered illustration spelling out Trick or Treat"
          />
          <IllustrationItem
            src={swansImage}
            alt="Swans flying amongst the clouds in a risograph effect"
            //description="Digitally illustrated with a risograph print effect."
          />
          <IllustrationItem
            src={birdsInkImage}
            alt="Birds in ink"
            description="A selection of birds from my nature journal. Great Spotted Woodpecker, Crested Tit and Eurasian Wren."
          />
          <IllustrationItem
            src={backgammonImage}
            alt="Cat playing backgammon"
          />
          <IllustrationItem
            src={birdsImage}
            alt="Birds in watercolor and ink"
            // description="Watercolor and ink."
          />
          <IllustrationItem
            src={tvImage}
            alt="Vintage tv flying among the clouds"
          />
          <IllustrationItem
            src={bearImage}
            alt="Bear listening to music in his room"
          />
          <IllustrationItem
            src={vansImage}
            alt="old vans shoes in watercolor and ink"
            // description="Watercolor and ink."
          />
          <IllustrationItem
            src={catWereWolfImage}
            alt="Cat-werewolf in a pumpkin"
          />
          <IllustrationItem src={duckGif} alt="Walking duck animation" />
          <IllustrationItem
            src={basketImage}
            alt="A basket in a rubber hose retro style"
          />
          <IllustrationItem
            src={clownImage}
            alt="Pennywise the clown in rubber hose retro style"
          />
          <IllustrationItem
            src={abcImage}
            alt="Alphabet spelled out with funny characters"
          />
          <IllustrationItem
            src={catTurnaround}
            alt="Black and white cat turnaround animation"
          />
        </div>
      </div>
      <Contact backgroundColor="#F4EFEC" />
      <Footer backgroundColor="#F4EFEC" />
    </>
  );
};

export default Illustrations;
