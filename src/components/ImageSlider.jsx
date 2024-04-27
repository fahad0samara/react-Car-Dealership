import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ImageSlider = ({ images, carId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const PrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 transfrom -translate-y-1/2 px-2 py-1"
        onClick={PrevSlide}
      >
        <IoIosArrowRoundBack size={28} />
      </button>
      <button
        className="absolute top-1/2 right-0 transfrom -translate-y-1/2 px-2 py-1"
        onClick={nextSlide}
      >
        <IoIosArrowRoundForward size={28} />
      </button>
      <div className="overflow-hidden">
        <img src={images[currentIndex]} alt="" className="w-full" />
      </div>
      <div className="flex justify-center mt-5">
        {images.map((image, index) => (
          <Link key={index} to={`/details/${carId}`}>
            <img
              src={image}
              alt=""
              onClick={() => setCurrentIndex(index)}
              className={`w-24 mx-1 cursor-pointer border-4 rounded-xl ${
                currentIndex === index
                  ? "border-orange-500"
                  : "border-gray-300"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
