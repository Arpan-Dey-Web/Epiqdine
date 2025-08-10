import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";
import { Link, NavLink } from "react-router";
import Food from "../Component/Food";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Component/Loading";
import { ThemeContext } from "../Component/Context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image4 from "../assets/image4.jpg";
import { PromotionalOffer } from "../Component/PromotionalOffer";
import FreequentAskedQuestion from "../Component/FreequentAskedQuestion";
import CustomeerReview from "../Component/CustomeerReview";
import DailySpecialOffer from "../Component/DailySpecialOffer";
const Home = () => {
  // toggle design with theme change
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-out-cubic", // smooth easing
      once: true, // only animate once
    });
  }, []);
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
    "flex items-center  overflow-hidden   md:h-[450px] rounded-2xl relative  ";
  const sliderImageClass = "object-cover w-full rounded-2xl  blur-[3px]";

  const swiperHeaderClass = ` absolute flex flex-col 
  text-indigo-700 font-bold text-center text-xl md:text-3xl
  lg:text-5xl`;

  const swiperParagraphClass = `hidden md:block font-mono  text-sm   pb-2 md:pb-0 lg:py-3 text-orange-400 text-left  `;

  return (
    <div>
      {/* banner */}
      <div className=" rounded-2xl mx-auto w-full fira-font my-10">
        <div className={sliderClass}>
          <div>
            <img className={sliderImageClass} src={image4} alt="" />
          </div>
          <div
            className={
              theme == "dark"
                ? swiperHeaderClass
                : " text-yellow-400 absolute  font-bold text-center text-xl md:text-3xl lg:text-5xl"
            }
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: [0, 0.5, 1], // Step-by-step opacity change
                y: [50, 25, 0], // Moves up while fading in
              }}
              transition={{
                duration: 2, // total animation time
                ease: "easeOut",
              }}
              
            >
              <h1 className="text-left   ml-10 leading-snug ">
                Bringing Comfort <br />
                To Your Plate
              </h1>

              <p
                className={`${swiperParagraphClass} ml-10 w-96 text-justify   font-bold leading-relaxed`}
              >
                Craving something cozy? Whether it’s homestyle classics or bold
                new creations, we serve warmth in every dish. Because great food
                feels like home.
              </p>

              <div className=" text-left ml-10 mt-5">
                <button className="details-button text-xl ">
                  <NavLink to={"/allFoods"}>All Foods</NavLink>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-base-100 text-base-content  px-4 md:px-10 rounded-2xl shadow-lg">
        <div className="my-20">
          <DailySpecialOffer></DailySpecialOffer>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          viewport={{ once: true }} // Runs only once when it comes into view
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
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
        </motion.div>
      </div>

      {/* 6 food data showing here */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-2 md:gap-4 rounded-2xl w-full mx-auto py-10">
        {data.map((food, index) => (
          <Food key={index} food={food}></Food>
        ))}
      </div>
      {/* all food page link */}
      <div className="flex justify-center">
        <Link to={"/allFoods"}>
          <button
            className={`flex items-center gap-2 border   font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 hover:text-white active:scale-95 transition-all  group ${
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
