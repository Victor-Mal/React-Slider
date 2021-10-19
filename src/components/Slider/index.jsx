import React, { useEffect, useState } from "react";

const arrayImages = [
  "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg?t=tn992",
  "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn992",
  "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-saturn.jpg?t=tn992",
  "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-bubble-nebula.jpg?t=tn992",
  "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-whirlpool-galaxy.jpg?t=tn992",
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % arrayImages.length);
    }, 2000);

    return () => {
      clearInterval(intervalID);
    };
  }, [currentSlide]);
  return (
    <div>
      <img src={arrayImages[currentSlide]} alt="" />
    </div>
  );
}
