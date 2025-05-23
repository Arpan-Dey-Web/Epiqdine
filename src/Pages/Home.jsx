import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useLoaderData } from "react-router";
import Group from "../Component/Group";
import { toast, ToastContainer } from "react-toastify";
const Home = () => {
  const allgroup = useLoaderData();
  const [groups, setGroups] = useState(allgroup);
  const sliderClass =
    "flex items-center justify-center overflow-hidden  h-[400px] rounded-2xl";
  const sliderImageClass = "object-co w-full rounded-2xl  ";
 
  return (
    <div>
      {/* slider */}
      <div className="mt-5 rounded-2xl mx-auto w-full">
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

      <div>
        <h1 className=" text-4xl md:text-5xl text-white text-center pt-10 pb-5 font-bold logoName">
          Latest Group for Explore
        </h1>
        <p className="font-light text-base md:text-xl logoName text-center  text-gray-400  max-w-4xl mx-auto">
          Discover new ideas, share your voice, and connect with like-minded
          explorers.
           This latest group is your gateway to inspiration,
          collaboration, and meaningful journeys.
         
          join now and start exploring together{`=>`}
        </p>
      </div>
      {/* all groups looping here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 rounded-2xl w-full mx-auto py-10">
        {groups.map((group, index) => (
          <Group key={index} group={group}></Group>
        ))}
      </div>

      
      <ToastContainer />

     
    </div>
  );
};

export default Home;
