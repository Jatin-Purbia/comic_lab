import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import { Pagination, Navigation } from "swiper/modules"; // Import Navigation module
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

const Carousel = () => {
  return (
    <div className="w-full h-80 md:h-96 overflow-hidden mt-6 relative"> {/* Add relative positioning */}
      <Swiper
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev", // Custom previous button selector
          nextEl: ".swiper-button-next", // Custom next button selector
        }}
        modules={[Pagination, Navigation]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            src="src/assets/test-1.jpg"
            alt="Comic 1"
            className="w-full h-full object-contain rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/test-2.jpg"
            alt="Comic 2"
            className="w-full h-full object-contain rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/test-3.jpg"
            alt="Comic 3"
            className="w-full h-full object-contain rounded-lg"
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom arrow buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10">
        <button className="swiper-button-prev bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors">
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10">
        <button className="swiper-button-next bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;