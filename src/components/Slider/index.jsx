import React, { useEffect, useState } from "react";
import Button from "../Button/index";
import {
  right_arrow,
  left_arrow,
  fullscreen,
  run,
  pause,
} from "components/assets/icons";
import "./slider.sass";
import classNames from "classnames";



export default function Slider(props) { 

  const arrayImages = props.arrayImages; 

  const [currentSlide, setCurrentSlide] = useState(0);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [turntable, setTurntable] = useState(run);

  const btnRight = classNames("btnStyle", "btnRight");
  const btnLeft = classNames("btnStyle", "btnLeft");

 

  const startButton = () => {
    switchSlideIcon();
    autoSlide();
  };

  const switchSlideIcon = () => {
    turntable === run ? setTurntable(pause) : setTurntable(run);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + arrayImages.length) % arrayImages.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % arrayImages.length);
  };

  const autoSlide = () => {
    setRunning((running) => !running);
  };

  const changeSpeed = (event) => {
    setSpeed(event.target.value);
  };
  
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.getElementById("imgSlide").requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  useEffect(() => {
    if (!running) {
      return;
    }
    const intervalID = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % arrayImages.length);
    }, speed);
    return () => {
      clearInterval(intervalID);
    };
  }, [currentSlide, running, speed, arrayImages.length]);

  return (
    <div>
      <div className="monitor">
        <div className="sliderScreen">
          <Button
            className={btnRight}
            title={<img src={left_arrow} alt="left arrow" />}
            action={prevSlide}
          />
          <img
            className="slide"
            id="imgSlide"
            src={arrayImages[currentSlide]}
            alt="slide"
          />
          <Button
            className={btnLeft}
            title={<img src={right_arrow} alt="right arrow" />}
            action={nextSlide}
          />
        </div>
        <div>
          <Button title={<img src={turntable} alt="run" />} action={startButton} />
          <input
            type="range"
            name="speed switch"
            value={speed}
            step={1000}
            min={1000}
            max={10000}
            onChange={changeSpeed}
          />
          <Button
            title={<img src={fullscreen} alt="fullscreen" />}
            action={toggleFullScreen}
          />
        </div>
      </div>
    </div>
  );
}
