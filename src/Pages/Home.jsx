import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Marquee from "react-fast-marquee";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link, NavLink } from "react-router";
import Food from "../Component/Food";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Component/Loading";
import { ThemeContext } from "../Component/Context/ThemeContext";
import like1 from "../assets/like1.jpg";
import like2 from "../assets/like2.jpg";
import like3 from "../assets/like3.jpg";
import like4 from "../assets/like4.jpg";
import like5 from "../assets/like5.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
const Home = () => {
  // toggle design with theme change
  const controller = useContext(ThemeContext);
  const { theme } = controller;
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
    "flex items-center justify-center overflow-hidden  h-[400px] rounded-2xl relative ";
  const sliderImageClass = "object-cover w-full rounded-2xl";

  const swiperHeaderClass = ` absolute flex flex-col items-center 
  text-indigo-700 font-bold text-center text-xl md:text-3xl
  lg:text-5xl`;

  const swiperParagraphClass = `font-mono text-white text-sm  w-8/12 text-center mx-auto pb-2 md:pb-0 lg:py-3`;

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
              <div>
                <img className={sliderImageClass} src={image1} alt="" />
              </div>

              <div
                className={
                  theme == "dark"
                    ? swiperHeaderClass
                    : " text-yellow-300 absolute flex flex-col items-center font-bold text-center text-xl md:text-3xl lg:text-5xl"
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
                  <button className="btn btn-outline btn-info">
                    All Foods
                  </button>
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
                    : " text-yellow-300 absolute flex flex-col items-center font-bold text-center text-xl md:text-3xl lg:text-5xl"
                }
              >
                <h1>"Where Every Meal Tells a Story"</h1>
                <p className={swiperParagraphClass}>
                  Step into a place where recipes are heirlooms and every bite
                  whispers tradition. Our chefs craft moments, not just meals —
                  ready to be savored, remembered, and shared.
                </p>
                <NavLink to={"/allFoods"}>
                  <button className="btn btn-outline btn-info">
                    All Foods
                  </button>
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
                    : " text-yellow-300 absolute flex flex-col items-center font-bold text-center text-xl md:text-3xl lg:text-5xl"
                }
              >
                <h1>"A Symphony of Spices & Smiles"</h1>
                <p className={swiperParagraphClass}>
                  From the first aroma to the final forkful, taste the harmony
                  of flavors curated to comfort, excite, and satisfy. Let your
                  cravings lead the way — the feast awaits.
                </p>
                <NavLink to={"/allFoods"}>
                  <button className="btn btn-outline btn-info">
                    All Foods
                  </button>
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
                    : " text-yellow-300 absolute flex flex-col items-center font-bold text-center text-xl md:text-3xl lg:text-5xl"
                }
              >
                <h1>"Bringing Comfort to Your Plate"</h1>
                <p className={swiperParagraphClass}>
                  Craving something cozy? Whether it’s homestyle classics or
                  bold new creations, we serve warmth in every dish. Because
                  great food feels like home.
                </p>
                <NavLink to={"/allFoods"}>
                  <button className="btn btn-outline btn-info">
                    All Foods
                  </button>
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
                    : " text-yellow-300 absolute flex flex-col items-center font-bold text-center text-xl md:text-3xl lg:text-5xl"
                }
              >
                <h1>"From Our Kitchen to Your Cravings"</h1>
                <p className={swiperParagraphClass}>
                  Crafted fresh, served warm — every meal is made with heart and
                  heritage. Join us on a journey of flavor where passion meets
                  the plate.
                </p>
                <NavLink to={"/allFoods"}>
                  <button className="btn btn-outline btn-info">
                    All Foods
                  </button>
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
              ? "text-4xl md:text-5xl font-extrabold text-center leading-tight text-indigo-700"
              : "text-yellow-300 text-4xl md:text-5xl font-extrabold text-center logoName leading-tight"
          }
        >
          Most Eated Foods
        </h1>

        <p className="mt-6 text-center text-orange-400 md:text-xl max-w-3xl mx-auto logoName leading-relaxed">
          "Our most-loved dishes, chosen by you. Taste the top picks that keep
          everyone coming back for more."
        </p>
      </div>

      {/* 6 food data showing here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 rounded-2xl w-full mx-auto py-10">
        {data.map((food, index) => (
          <Food key={index} food={food}></Food>
        ))}
      </div>

      {/* all food page link */}
      <div className="text-center">
        <Link to={"/allFoods"}>
          <button className="btn  btn-outline btn-success my-10">
            All Foods
          </button>
        </Link>
      </div>

      {/* freequently asked section */}
      <section className="border border-gray-300 rounded-2xl shadow-xl">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2
            className={
              theme == "dark"
                ? "text-4xl md:text-5xl font-extrabold text-center leading-tight text-indigo-700 pb-3"
                : "text-yellow-300 text-4xl md:text-5xl font-extrabold text-center logoName leading-tight pb-3"
            }
          >
            Frequently Asked Questions
          </h2>

          {/* Question 1 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold">
              Do you offer home delivery?
            </div>
            <div className="collapse-content text-sm">
              Yes! We deliver hot and fresh meals right to your doorstep. You
              can place an order through our website or delivery partners.
            </div>
          </div>

          {/* Question 2 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Can I make a reservation online?
            </div>
            <div className="collapse-content text-sm">
              Absolutely. Visit our "Reservations" page and choose your
              preferred date, time, and number of guests. We'll handle the rest!
            </div>
          </div>

          {/* Question 3 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              What payment methods do you accept?
            </div>
            <div className="collapse-content text-sm">
              We accept cash, credit/debit cards, and mobile payments like bKash
              and Nagad for your convenience.
            </div>
          </div>

          {/* Question 4 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Do you have vegetarian or vegan options?
            </div>
            <div className="collapse-content text-sm">
              Yes, we offer a variety of vegetarian and vegan dishes. Just look
              for the green leaf icon on our menu or ask our staff for
              recommendations.
            </div>
          </div>

          {/* Question 5 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              How can I track my order?
            </div>
            <div className="collapse-content text-sm">
              After placing an order, you'll receive a tracking link via SMS or
              email to monitor your food’s journey in real time.
            </div>
          </div>
        </div>
      </section>

      {/* review section  */}
      <section className="py-10 ">
        <div className=" text-center mt-5 mb-10">
          <h1
            className={
              theme == "dark"
                ? "text-2xl md:text-4xl font-extrabold text-center leading-tight text-indigo-700"
                : "text-yellow-300 text-2xl md:text-4xl font-extrabold text-center logoName leading-tight"
            }
          >
            Our Happy Customer Reviews
          </h1>
          <p className="pt-4 w-11/12 mx-auto text-center  font-thin">
            At the heart of every dish we serve is a story — one told best by
            those who’ve tasted the love we put on every plate. From cozy
            dinners to joyful celebrations, our guests leave not just full, but
            fulfilled. Here’s what our cherished customers are saying about
            their flavorful experiences with us.
          </p>
        </div>

        <Marquee pauseOnHover speed={50}>
          <div className="flex ">
            <div className="flex ">
              {/* Review 1 */}
              <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y  mr-4 border border-gray-300 rounded-2xl shadow-xl">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    <img
                      src={like1}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <h4 className="font-bold">Priya Sharma</h4>
                      <span className="text-xs text-gray-400">2 days ago</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-700">
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 512 512"
                    ></svg>
                    <span className="text-xl font-bold">4.9</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm ">
                  <p>
                    The biryani melted in my mouth like a poem composed in
                    saffron and spice.
                  </p>
                  <p>
                    Each bite told a tale of tradition, warmth, and soulful
                    care. Pure delight!
                  </p>
                </div>
              </div>

              {/* Review 2 */}
              <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y  mr-4 border border-gray-300 rounded-2xl shadow-xl">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    <img
                      src={like2}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <h4 className="font-bold">Ravi Malhotra</h4>
                      <span className="text-xs text-gray-400">1 week ago</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-700">
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 512 512"
                    ></svg>
                    <span className="text-xl font-bold">4.6</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm">
                  <p>
                    The paneer tikka danced with smoky elegance on my tongue.
                  </p>
                  <p>A symphony of flavors that warmed both belly and soul.</p>
                </div>
              </div>

              {/* Review 3 */}
              <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y  mr-4 border border-gray-300 rounded-2xl shadow-xl">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    <img
                      src={like3}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <h4 className="font-bold">Fatima Noor</h4>
                      <span className="text-xs text-gray-400">3 days ago</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-700">
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 512 512"
                    ></svg>
                    <span className="text-xl font-bold">5.0</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm ">
                  <p>
                    The mango lassi? Like sunshine spun into silk, refreshing
                    and divine.
                  </p>
                  <p>I left the café with a full heart and a smiling soul.</p>
                </div>
              </div>

              {/* Review 4 */}
              <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y  mr-4 border border-gray-300 rounded-2xl shadow-xl">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    <img
                      src={like4}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <h4 className="font-bold">Karan Desai</h4>
                      <span className="text-xs text-gray-400">5 hours ago</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-700">
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 512 512"
                    ></svg>
                    <span className="text-xl font-bold">4.7</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm ">
                  <p>
                    The garlic naan was a warm, soft cloud of flavor sent from
                    heaven’s tandoor.
                  </p>
                  <p>
                    I’d travel miles for that taste again. A masterpiece of
                    simplicity.
                  </p>
                </div>
              </div>

              {/* Review 5 */}
              <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y  mr-4 border border-gray-300 rounded-2xl shadow-xl">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    <img
                      src={like5}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <h4 className="font-bold">Neha Verma</h4>
                      <span className="text-xs text-gray-400">6 days ago</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-700">
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 512 512"
                    ></svg>
                    <span className="text-xl font-bold">4.8</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm ">
                  <p>
                    The dessert platter sang of cardamom dreams and rosewater
                    nostalgia.
                  </p>
                  <p>
                    A sweet epilogue to an unforgettable feast. I’m still
                    swooning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Home;
