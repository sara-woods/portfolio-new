import IllustrationItem from "./IllustrationItem";

import babyImage from "../../images/baby.jpg";
import publishingImage from "../../images/publishing.jpg";
import beachImage from "../../images/beach.jpg";
import photographyImage from "../../images/photography.jpg";
import campingImage from "../../images/camping.jpg";
import paddleImage from "../../images/paddleboards.jpg";
// import rockImage from "../../images/rock.jpg";
import rosesImage from "../../images/roses.jpg";
import soapImage from "../../images/soap.jpg";
import pugImage from "../../images/pug.jpg";
import cafeImage from "../../images/cafe.jpg";
import { contentData } from "../../contentData";
// import sprinterImage from "../../images/sprinter.jpg";

const GraphicDesigns = (props) => {
  return (
    <>
      <div>
        <div id="logo-personal" className="text-sm">
          <p>{contentData.graphicDesign.disclaimer}</p>
        </div>

        <IllustrationItem src={publishingImage} alt="publisher logo design" />
        <IllustrationItem src={babyImage} alt="baby boutique logo design" />
        <IllustrationItem src={beachImage} alt="beachy logo design" />
        <IllustrationItem
          src={photographyImage}
          alt="photography logo design"
        />
        <IllustrationItem src={campingImage} alt="outdoors logo design" />
        <IllustrationItem src={paddleImage} alt="paddle board logo design" />
        <IllustrationItem src={pugImage} alt="business card with pug logo" />
        {/* <IllustrationItem src={rockImage} alt="t-shirt with skull print" /> */}
        <IllustrationItem src={cafeImage} alt="gaming cafe logo design" />
        <IllustrationItem src={rosesImage} alt="t-shirt design with roses" />
        {/* <IllustrationItem
          src={sprinterImage}
          alt="camper van badge logo design"
        /> */}
        <IllustrationItem src={soapImage} alt="cute soap logo design" />
      </div>
    </>
  );
};

export default GraphicDesigns;
