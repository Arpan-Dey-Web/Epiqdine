import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Home = () => {
  const sliderClass ="flex items-center justify-center w-full  overflow-hidden rounded-2xl";
  const sliderImageClass = "object-contain max-w-5xl mx-auto max-h-full rounded-2xl";
  
  return (
    <div>
      {/* slider */}
      <div className="mt-5 rounded-2xl ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* slider 1 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <img
                className={sliderImageClass}
                src="https://i.postimg.cc/R06Vvw5b/e807987e-0f5c-4ec2-abc4-63dc7cab8df8-cali-paragliding-feel-and-live-the-true-flying-sensation.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          {/* slider 2 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <img
                className={sliderImageClass}
                src="  https://i.postimg.cc/ZqGYn0JY/pexels-arun-mathew-672148-1486036-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          {/* slider 3 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <img
                className={sliderImageClass}
                src=" https://i.postimg.cc/dt606qjn/pexels-mateus-oliveira-2150975619-32112693-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          {/* slider 4*/}
          <SwiperSlide>
            <div className={sliderClass}>
              <img
                className={sliderImageClass}
                src=" https://i.postimg.cc/P5F5G2cw/pexels-md-rafatul-islam-394880541-30518295-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          {/* slider 5 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <img
                className={sliderImageClass}
                src=" https://i.postimg.cc/W141fQ9V/pexels-photo-6550837.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
