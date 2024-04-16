import Navbar from "../../Navbar/Navbar";
import IllustrationItem from "./IllustrationItem";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

import bearImage from "../../../images/Illustrations/bear.jpg";
import tvImage from "../../../images/Illustrations/tv.jpg";
import birdsImage from "../../../images/Illustrations/birds.jpg";
import backgammonImage from "../../../images/Illustrations/backgammon.jpg";
import basketImage from "../../../images/Illustrations/basket.jpg";
import catWereWolfImage from "../../../images/Illustrations/catwerewolf.jpg";
import girlImage from "../../../images/Illustrations/girl.jpg";
import clownImage from "../../../images/Illustrations/pennywise.jpg";
import vansImage from "../../../images/Illustrations/vans.jpg";
import catTurnaround from "../../../images/Illustrations/cat_turnaround.gif";
import duckGif from "../../../images/Illustrations/duck.gif";
import { useEffect } from "react";

const Illustrations = () => {
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
      <div className="main-container extra-bottom-padding">
        <h1>Illustrations</h1>
        <div className="illustrations-container">
          <IllustrationItem
            src={tvImage}
            alt="Vintage tv flying among the clouds"
          />
          <IllustrationItem
            src={backgammonImage}
            alt="Cat playing backgammon"
          />
          <IllustrationItem
            src={birdsImage}
            alt="Birds in watercolor and ink"
          />
          <IllustrationItem
            src={bearImage}
            alt="Bear listening to music in his room"
          />
          <IllustrationItem
            src={vansImage}
            alt="old vans shoes in watercolor and ink"
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
            src={girlImage}
            alt="Crying girl in halftone asking for vegan chocolate in vintage comic book halftone style"
          />
          <IllustrationItem
            src={clownImage}
            alt="Pennywise the clown in rubber hose retro style"
          />
          <IllustrationItem
            src={catTurnaround}
            alt="Black and white cat turnaround animation"
          />
        </div>
      </div>
      <Contact backgroundColor="#F2F2F2" header={"Let's connect"} />
      <Footer backgroundColor="#F2F2F2" />
    </>
  );
};

export default Illustrations;
