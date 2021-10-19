import React, { useEffect, useState } from "react";
import Button from "../Button/index";

const arrayImages = [
  "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg?t=tn992",
  "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn992",
  "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-saturn.jpg?t=tn992",
  "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-bubble-nebula.jpg?t=tn992",
  "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-whirlpool-galaxy.jpg?t=tn992",
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [running, setRunning] = useState(false);

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + arrayImages.length) % arrayImages.length
    );
  };
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % arrayImages.length);
    console.log(currentSlide);
  };
  const autoSlide = () => {
    setRunning((running) => !running);
  };

  useEffect(() => {
    if (!running) {
      console.log(running);
      return;
    }
    const intervalID = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % arrayImages.length);
      console.log(currentSlide);
    }, 2000);

    return () => {
      clearInterval(intervalID);
    };
  }, [currentSlide, running]);
  return (
    <div>
      <Button title={"Prev"} action={prevSlide} />
      <img src={arrayImages[currentSlide]} alt="slide" />
      <Button title={"Next"} action={nextSlide} />
      <Button title={"Slide Show"} action={autoSlide} />
    </div>
  );
}
