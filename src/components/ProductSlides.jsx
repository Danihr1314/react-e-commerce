import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProductSlides = ({ images }) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block mw-100 mh-100"
            src={images?.productImgs[0]}
            alt="First slide"
            style={{
              width: "400px",
              height: "400px",
              objectFit: "contain",
              position: "relative"
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mw-100 mh-100"
            src={images?.productImgs[1]}
            alt="Second slide"
            style={{
              width: "400px",
              height: "400px",
              objectFit: "contain",
              position: "relative"
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mw-100 mh-100"
            src={images?.productImgs[2]}
            alt="Third slide"
            style={{
              width: "400px",
              height: "400px",
              objectFit: "contain",
              position: "relative"
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProductSlides;