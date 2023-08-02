import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  //   const goToPrevSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === 0 ? images.length - 1 : prevSlide - 1
  //     );
  //   };

  //   const goToNextSlide = () => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  //   };

  return (
    <div className="image-slider lests">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <Image
            className="to-svg"
            src={image}
            alt={`Slide ${index + 1}`}
            width={500}
            height={500}
          />
        </div>
      ))}
      {/* <div className="controls">
        <button onClick={goToPrevSlide}>Previous</button>
        <button onClick={goToNextSlide}>Nexts</button>
      </div> */}
    </div>
  );
};

export default ImageSlider;
