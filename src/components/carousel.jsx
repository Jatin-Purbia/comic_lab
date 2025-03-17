import React, { useRef, useState, useEffect } from "react";

// Import images directly
import test1 from "../assets/test-1.jpg";
import test2 from "../assets/test-2.jpg";
import test3 from "../assets/test-3.jpg";

const Carousel = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [test1, test2, test3];
  const autoScrollDelay = 3000; // 3 seconds

  const scrollLeft = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, images.length - 1));
  };

  const handleImageClick = (index) => {
    console.log(`Image ${index + 1} clicked`);
    // Add your image click handling logic here
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoScrollDelay);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = currentSlide * window.innerWidth;
    }
  }, [currentSlide]);

  return (
    <>
      <div className="relative flex flex-col items-center">
        <div className="relative flex items-center w-full justify-center mt-5">
          <button
            onClick={scrollLeft}
            className="bg-gray-200 p-3 rounded-full absolute left-4 z-10 hover:bg-gray-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div
            ref={containerRef}
            className="flex overflow-x-auto whitespace-nowrap scroll-smooth w-full max-w-screen-xl"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="w-screen h-[80vh] flex-shrink-0 p-4 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="bg-gray-200 p-3 rounded-full absolute right-4 z-10 hover:bg-gray-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-300"
              } hover:bg-gray-500 transition-colors`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;