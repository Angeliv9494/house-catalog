import productCatalog from "../data/products";

import "./Preview.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

interface PreviewProps {
  productId: number;
}

export const Preview = (props: PreviewProps) => {
  const { productId } = props;
  const product = productCatalog.find((p) => p.id === productId);

  const modalClasses = "modal show hide";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="filter-background"></div>

      <div className={modalClasses}>
        <div>
          {" "}
          <h1 className="modal-product-name">{product?.name}</h1>
          <h2 className="modal-product-price">
            {product?.price.toLocaleString("en-US", {
              style: "currency",
              currency: "MXN",
            })}
          </h2>
        </div>

        <Slider {...settings}>
          <div className="carousel-item">
            <img src={product?.image} alt={product?.name} className="carousel-image" />
          </div>

          <div className="carousel-item">
            <p className="carousel-image">2</p>
          </div>
        </Slider>
      </div>
    </>
  );
};
