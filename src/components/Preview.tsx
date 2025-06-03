import "./Preview.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const Preview = () => {
  const modalClasses = "modal show hide";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="filter-background"></div>

      <div className={modalClasses}>
        <div className="slider-wrapper">
          <Slider {...settings}>
            <div className="carousel-item">
              <p className="carousel-image">1</p>
            </div>

            <div className="carousel-item">
              <p className="carousel-image">2</p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
