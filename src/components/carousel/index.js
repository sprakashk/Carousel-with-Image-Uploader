import React, { useEffect, useState } from "react";
import "./style.css";
const Carousel = (props = []) => {
  let index = 0;
  const arrowClickHandler = direction => {
    if (props.uploadedImages.length <= 1) {
      return;
    }
    let imagesDOMElements = document.querySelectorAll(".image-container div");
    index = index + direction;
    index = Math.min(Math.max(index, 0), imagesDOMElements.length - 1);
    imagesDOMElements[index].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="carousel-container">
      <div className="image-container">
        {!props.uploadedImages.length && (
          <div>
            <p>No image selected</p>
          </div>
        )}
        {props.uploadedImages &&
          props.uploadedImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt="Carousel"
                onClick={() => props.modalImageHandler(image)}
              />{" "}
            </div>
          ))}
      </div>
      <div
        title="Previous image"
        onClick={() => arrowClickHandler(-1)}
        className="left-button"
      >
        &lt;
      </div>
      <div
        title="Next image"
        onClick={() => arrowClickHandler(1)}
        className="right-button"
      >
        &gt;
      </div>
    </div>
  );
};

export default Carousel;
