import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProductSlides = ({ images }) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item
          style={{
            maxWidth: "90%",
            maxHeight: "10%",
            objectFit: "contain"
          }}
        >
          <img
            className="d-block mw-100 mh-100"
            src={images?.productImgs[0]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mw-100 mh-100"
            src={images?.productImgs[1]}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mw-100 mh-100"
            src={images?.productImgs[2]}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProductSlides;