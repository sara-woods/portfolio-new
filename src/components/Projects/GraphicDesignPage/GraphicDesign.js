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
import musikkolloImage from "../../../images/Illustrations/musikkollo.jpg";
import posterMusicImage from "../../../images/Illustrations/poster-music.jpg";
import { useEffect } from "react";

const GraphicDesign = () => {
  useEffect(() => {
    document.title = "Sara Woods | Graphic Design";
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
        <h1>Graphic Design</h1>
        <div className="illustrations-container">
          <IllustrationItem
            src={reddotImage}
            alt="Seinfeld episode poster design"
            description="Poster design for the Seinfeld episode The Red Dot, inspired by Saul Bass's movie posters."
          />
          <IllustrationItem
            src={beachImage}
            alt="Beachy company logo design"
            description="Logo design for a company selling beach totes. The logo mark was inspired by the sun and a bay seen from above."
          />
          <IllustrationItem
            src={musikkolloImage}
            alt="Music camp logo design"
            description="Hand lettered logo for a local music camp, targeting 10-15 year olds learning to play an instrument."
          />
          <IllustrationItem
            src={posterMusicImage}
            alt="Poster design for a music fest"
            description="Poster design for a local music fest with a hand lettered main title/logo.
Prerequisites for making the design was to use the pre-existent background graphic and to create the poster in Canva."
          />
          <IllustrationItem
            src={photographyImage}
            alt="Logo design for a photographer business."
            description="Logo design for a photography studio."
          />
          <IllustrationItem
            src={symmetryImage}
            alt="Yoga studio logo design"
            description="Logo design for a yoga studio."
          />
          {/* <IllustrationItem
            src={bagImage}
            alt="Tote bag with outdoorsy illustration"
          /> */}
          <IllustrationItem
            src={babyImage}
            alt="Baby shop logo design"
            description="Logo design for a small shop selling baby clothes and accessories."
          />
          <IllustrationItem
            src={campingImage}
            alt="Outdoors and nature oriented brand logo design"
            description="Logo design for a company offering outdoor experiences."
          />
          <IllustrationItem
            src={paddleboardsImage}
            alt="Stand up paddle boards logo design"
            description="Logo design for a stand up paddling (SUP) boards."
          />
          <IllustrationItem
            src={publishingImage}
            alt="Logo design for a publishing company"
            description="Book publisher logo design."
          />
          <IllustrationItem
            src={rosesImage}
            alt="T-shirt design with roses and text"
            description="T-shirt design for a fictive brand."
          />
        </div>
      </div>
      <Contact backgroundColor="#F4EFEC" />
      <Footer backgroundColor="#F4EFEC" />
    </>
  );
};

export default GraphicDesign;
