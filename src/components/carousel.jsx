import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="w-full h-80 md:h-96 overflow-hidden mt-6">
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="h-full w-full">
        <SwiperSlide><img src="/assets/slide1.jpg" alt="Comic 1" className="w-full h-full object-cover rounded-lg" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slide2.jpg" alt="Comic 2" className="w-full h-full object-cover rounded-lg" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slide3.jpg" alt="Comic 3" className="w-full h-full object-cover rounded-lg" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
