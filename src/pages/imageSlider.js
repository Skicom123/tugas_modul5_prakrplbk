import React, { useEffect, useState } from "react";
import { Design } from "../components/design";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../App.css";

export const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides?.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="Right-arrow" onClick={nextSlide} />
      {Design.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.Image} alt="design 1" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
