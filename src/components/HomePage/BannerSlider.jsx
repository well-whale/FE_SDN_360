import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images (Make sure the path is correct)
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";

const images = [banner1, banner2, banner3, banner4, banner5];

const BannerSlider = () => {
  console.log("BannerSlider is rendering..."); // Debugging

  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // 5 seconds
    arrows: false,
  };

  return (
    <div style={{ border: "1px solid ", borderRadius: "10px", position: "relative" }}>
      <Slider ref={setSliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} style={{ minHeight: "400px" }}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "400px", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>

      {/* Custom Prev/Next Buttons */}
      <button
        onClick={() => sliderRef?.slickPrev()}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {"<"}
      </button>

      <button
        onClick={() => sliderRef?.slickNext()}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default BannerSlider;
