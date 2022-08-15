import { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";


function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  // function when clicked on button, next slide appear
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  // function when clicked on button, previous slide appear
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

   const moveDot = index => {
    setSlideIndex(index)
  }
 
  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={obj.id}
          >
            <img
              src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.jpg`}
              alt=""
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />


    {/*create dot container  */}
      {/* <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            key={uuidv4()}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div> */}
    </div>
  );
}

export default Slider;
