import bearImage  from "../../images/bear.jpg";
import birdsImage  from "../../images/birds.jpg";
import tvImage  from "../../images/tv.jpg";
import "./Carousel.css"

import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img alt="" src={bearImage} />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" src={tvImage} />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" src={birdsImage} />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
