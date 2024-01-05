import IllustrationItem from "./IllustrationItem";

import babyImage from "../../images/baby.jpg";
import publishingImage from "../../images/publishing.jpg";
import beachImage from "../../images/beach.jpg";
import photographyImage from "../../images/photography.jpg";
import campingImage from "../../images/camping.jpg";
import paddleImage from "../../images/paddleboards.jpg";
import rosesImage from "../../images/roses.jpg";
import soapImage from "../../images/soap.jpg";

const GraphicDesigns = (props) => {
  return (
    <>
      <div>
        <div id="logo-personal" className="text-sm mt-3">
          <p>This selection of works is a mix of personal and client work.</p>
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
        {/* <IllustrationItem src={pugImage} alt="business card with pug logo" /> */}
        {/* <IllustrationItem src={cafeImage} alt="gaming cafe logo design" /> */}
        <IllustrationItem src={rosesImage} alt="t-shirt design with roses" />
        <IllustrationItem src={soapImage} alt="cute soap logo design" />
      </div>
    </>
  );
};

export default GraphicDesigns;
