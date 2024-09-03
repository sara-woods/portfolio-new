import Navbar from "../../Navbar/Navbar";
import IllustrationItem from "../IllustrationsPage/IllustrationItem";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

import reddotImage from "../../../images/Illustrations/thereddot.jpg";
import babyImage from "../../../images/Illustrations/baby.jpg";
import beachImage from "../../../images/Illustrations/beach.jpg";
import campingImage from "../../../images/Illustrations/camping.jpg";
import paddleboardsImage from "../../../images/Illustrations/paddleboards.jpg";
import photographyImage from "../../../images/Illustrations/photography.jpg";
import publishingImage from "../../../images/Illustrations/publishing.jpg";
import rosesImage from "../../../images/Illustrations/roses.jpg";
import symmetryImage from "../../../images/Illustrations/symmetry.jpg";
import bagImage from "../../../images/Illustrations/bag.jpg";
import { useEffect } from "react";

const GraphicDesign = () => {
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
        <h1>Graphic Design</h1>
        <div className="illustrations-container">
          <IllustrationItem
            src={reddotImage}
            alt="Seinfeld episode poster design"
          />
          <IllustrationItem src={beachImage} alt="Beachy company logo design" />
          <IllustrationItem
            src={photographyImage}
            alt="Logo design for a photographer"
          />
          <IllustrationItem src={symmetryImage} alt="Yoga studio logo design" />
          {/* <IllustrationItem
            src={bagImage}
            alt="Tote bag with outdoorsy illustration"
          /> */}
          <IllustrationItem src={babyImage} alt="Baby shop logo design" />
          <IllustrationItem
            src={campingImage}
            alt="Outdoors and nature oriented brand logo design"
          />
          <IllustrationItem
            src={paddleboardsImage}
            alt="Stand up paddle boards logo design"
          />
          <IllustrationItem
            src={publishingImage}
            alt="Logo design for a publishing company"
          />
          <IllustrationItem
            src={rosesImage}
            alt="T-shirt design with roses and text"
          />
        </div>
      </div>
      <Contact backgroundColor="#F4EFEC" />
      <Footer backgroundColor="#F4EFEC" />
    </>
  );
};

export default GraphicDesign;
