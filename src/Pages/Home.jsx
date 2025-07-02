import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link, NavLink } from "react-router";
import Food from "../Component/Food";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Component/Loading";
import { ThemeContext } from "../Component/Context/ThemeContext";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpeg";
import { PromotionalOffer } from "../Component/PromotionalOffer";
import FreequentAskedQuestion from "../Component/FreequentAskedQuestion";
import CustomeerReview from "../Component/CustomeerReview";
const Home = () => {
  // toggle design with theme change
  const {theme} = useContext(ThemeContext);
  // console.log(theme);

  // using tanstack query
  const { isPending, isError, data } = useQuery({
    queryKey: ["allfoodData"],
    queryFn: async () => {
      const res = await fetch(
        "https://assaignment-11-server-iota.vercel.app/addfood"
      );
      return res.json();
    },
  });
  if (isPending) return <Loading />;
  if (isError) return <Error />;

  const sliderClass =
    "flex items-center justify-center overflow-hidden   md:h-[450px] rounded-2xl relative  ";
  const sliderImageClass = "object-cover w-full rounded-2xl  blur-[3px]";

  const swiperHeaderClass = ` absolute flex flex-col items-center 
  text-indigo-700 font-bold text-center text-xl md:text-3xl
  lg:text-5xl`;

  const swiperParagraphClass = `hidden md:block font-mono  text-sm  w-8/12 text-center mx-auto pb-2 md:pb-0 lg:py-3 text-orange-400 `;

  return (
    <div>
      {/* slider */}
      <div className=" rounded-2xl mx-auto w-full fira-font">
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
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* slider 1 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <div>
                <img className={sliderImageClass} src={image1} alt="" />
              </div>

              <div
                className={
                  theme == "dark"
                    ? swiperHeaderClass
                    : " text-yellow-400 absolute flex flex-col items-center font-bold text-center text-xl md:text-3xl lg:text-5xl"
                }
              >
                <h1>"Savor the Flavor, One Bite at a Time"</h1>
                <p className={swiperParagraphClass}>
                  Welcome to a world where taste meets tradition. From sizzling
                  street eats to gourmet delights, we serve food that warms your
                  heart and stirs your soul. Discover your next favorite dish
                  today.
                </p>
                <NavLink to={"/allFoods"}>
                  <button className="details-button text-xl">All Foods</button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
          {/* slider 2 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <div>
                <img className={sliderImageClass} src={image2} alt="" />
              </div>
              <div
                className={
                  theme == "dark"
                    ? swiperHeaderClass
                    : " text-yellow-400 absolute flex flex-col items-center font-bold text-center text-xl md:text-3xl lg:text-5xl"
                }
              >
                <h1>"Where Every Meal Tells a Story"</h1>
                <p className={swiperParagraphClass}>
                  Step into a place where recipes are heirlooms and every bite
                  whispers tradition. Our chefs craft moments, not just meals —
                  ready to be savored, remembered, and shared.
                </p>
                <NavLink to={"/allFoods"}>
                  <button className="details-button text-xl">All Foods</button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
          {/* slider 3 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <div>
                <img className={sliderImageClass} src={image3} alt="" />
              </div>
              <div
                className={
                  theme == "dark"
                    ? swiperHeaderClass
                    : " text-yellow-400 absolute flex flex-col items-center font-bold text-center text-xl md:text-3xl lg:text-5xl"
                }
              >
                <h1>"A Symphony of Spices & Smiles"</h1>
                <p className={swiperParagraphClass}>
                  From the first aroma to the final forkful, taste the harmony
                  of flavors curated to comfort, excite, and satisfy. Let your
                  cravings lead the way — the feast awaits.
                </p>
                <NavLink to={"/allFoods"}>
                  <button className="details-button text-xl">All Foods</button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
          {/* slider 4*/}
          <SwiperSlide>
            <div className={sliderClass}>
              <div>
                <img className={sliderImageClass} src={image4} alt="" />
              </div>
              <div
                className={
                  theme == "dark"
                    ? swiperHeaderClass
                    : " text-yellow-400 absolute flex flex-col items-center font-bold text-center text-xl md:text-3xl lg:text-5xl"
                }
              >
                <h1>"Bringing Comfort to Your Plate"</h1>
                <p className={swiperParagraphClass}>
                  Craving something cozy? Whether it’s homestyle classics or
                  bold new creations, we serve warmth in every dish. Because
                  great food feels like home.
                </p>
                <NavLink to={"/allFoods"}>
                  <button className="details-button text-xl">All Foods</button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
          {/* slider 5 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <div>
                <img className={sliderImageClass} src={image5} alt="" />
              </div>
              <div
                className={
                  theme == "dark"
                    ? swiperHeaderClass
                    : " text-yellow-400 absolute flex flex-col items-center font-bold text-center text-xl md:text-3xl lg:text-5xl"
                }
              >
                <h1>"From Our Kitchen to Your Cravings"</h1>
                <p className={swiperParagraphClass}>
                  Crafted fresh, served warm — every meal is made with heart and
                  heritage. Join us on a journey of flavor where passion meets
                  the plate.
                </p>
                <NavLink to={"/allFoods"}>
                  <button className="details-button text-xl">All Foods</button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-base-100 text-base-content py-16 px-4 md:px-10 rounded-2xl shadow-lg">
        <h1
          className={
            theme == "dark"
              ? "text-4xl md:text-5xl font-extrabold text-center leading-tight text-indigo-700 logoName"
              : "text-yellow-400 text-4xl md:text-5xl font-extrabold text-center logoName leading-tight"
          }
        >
          Discover Our Foods
        </h1>

        <p className="mt-6 text-center text-orange-500 md:text-xl max-w-3xl mx-auto logoName leading-relaxed">
          "Our most-loved dishes, chosen by you. Taste the top picks that keep
          everyone coming back for more."
        </p>
      </div>
      {/* 6 food data showing here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 rounded-2xl w-full mx-auto py-10">
        {data.map((food, index) => (
          <Food key={index} food={food}></Food>
        ))}
      </div>
      {/* all food page link */}
      <div className="flex justify-center">
        <Link to={"/allFoods"}>
          <button
            className={`flex items-center gap-2 border   font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 hover:text-white active:scale-95 transition-all mb-10 group ${
              theme == "light"
                ? "text-yellow-400 border-yellow-400 "
                : "text-indigo-400 border-indigo-400"
            }`}
          >
            Go To All Food Page
            <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </Link>
      </div>
      <div className="my-10">
        <PromotionalOffer />
      </div>
      {/* freequently asked section */}
      <FreequentAskedQuestion />
      {/* review section  */}
      <CustomeerReview />
    </div>
  );
};

export default Home;
