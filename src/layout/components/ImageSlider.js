import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img className="to-svg" src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      {/* <div className="controls">
        <button onClick={goToPrevSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div> */}
    </div>
  );
};

export default ImageSlider;
