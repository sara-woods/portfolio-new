import Navbar from "../../Navbar/Navbar";
import IllustrationItem from "../IllustrationsPage/IllustrationItem";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

import babyImage from "../../../images/Illustrations/baby.jpg";
import beachImage from "../../../images/Illustrations/beach.jpg";
import campingImage from "../../../images/Illustrations/camping.jpg";
import paddleboardsImage from "../../../images/Illustrations/paddleboards.jpg";
import photographyImage from "../../../images/Illustrations/photography.jpg";
import publishingImage from "../../../images/Illustrations/publishing.jpg";
import rosesImage from "../../../images/Illustrations/roses.jpg";
import soapImage from "../../../images/Illustrations/soap.jpg";
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
          <IllustrationItem src={babyImage} alt="Baby shop logo design" />
          <IllustrationItem src={beachImage} alt="Beachy company logo design" />
          <IllustrationItem
            src={campingImage}
            alt="Outdoors and nature oriented brand logo design"
          />
          <IllustrationItem
            src={paddleboardsImage}
            alt="Stand up paddle boards logo design"
          />
          <IllustrationItem
            src={photographyImage}
            alt="Logo design for a photographer"
          />
          <IllustrationItem
            src={publishingImage}
            alt="Logo design for a publishing company"
          />
          <IllustrationItem
            src={rosesImage}
            alt="T-shirt design with roses and text"
          />
          <IllustrationItem
            src={soapImage}
            alt="Logo design for a handmande soap company with a young owner"
          />
        </div>
      </div>
      <Contact backgroundColor="#F4EFEC" />
      <Footer backgroundColor="#F4EFEC" />
    </>
  );
};

export default GraphicDesign;
