import React from 'react';
import './DarkVariantExample.css'; // Import the CSS file for styling

import Carousel from 'react-bootstrap/Carousel';
import rtx4090Image from '../images/banner/rtx-4090.jpg';

function DarkVariantExample() {
  return (
    <div className="page-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={rtx4090Image}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
          <a href="/" className="carousel-title">Comprar ahora</a>
            <p>Nueva NVIDIA RTX 4090.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={rtx4090Image}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h5 className="carousel-title">Comprar ahora</h5>
            <p>Nueva NVIDIA RTX 4090.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={rtx4090Image}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h5 className="carousel-title">Comprar ahora</h5>
            <p>
            Nueva NVIDIA RTX 4090.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
