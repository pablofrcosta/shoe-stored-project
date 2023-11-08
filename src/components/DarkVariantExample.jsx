import Carousel from 'react-bootstrap/Carousel';
import tenis1 from '../img/tenis1.jpg'
import tenis2 from '../img/tenis2.jpg'
import tenis3 from '../img/tenis3.jpg'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tenis1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tenis2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tenis3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;