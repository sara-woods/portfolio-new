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
import catGif from "../../images/cat_turnaround.gif";
import duckGif from "../../images/duck.gif";

const Illustrations = (props) => {
  return (
    <>
      <div>
        <IllustrationItem
          src={tvImage}
          alt="Vintage tv flying among the clouds"
        />
        <IllustrationItem src={backgammonImage} alt="Cat playing backgammon" />
        <IllustrationItem src={birdsImage} alt="Birds in watercolor and ink" />
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
          src={faceImage}
          alt="A girls face in watercolor with thick eyeliner"
        />
        <IllustrationItem
          src={catGif}
          alt="Black and white cat turnaround animation"
        />
        <IllustrationItem
          src={abcImage}
          alt="The alphabet as different figures"
        />
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
      </div>
    </>
  );
};

export default Illustrations;
