import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
const DailySpecialOffer = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="grid grid-cols-12"
    >
      <div className="col-span-6">
        <img
          className="animate-spin-y"
          src="https://i.ibb.co.com/4gTf915C/daily-offer-image.png"
          alt=""
        />
      </div>
      <div className="my-auto col-span-6">
        <ul>
          <li className="text-zinc-500 font-bold hanken-font ">
            Our Daily Offer
          </li>
        </ul>
        <h1 className="text-[42px] font-extrabold hanken-font ">
          Taste The Savings With Our <br />
          <span className="text-zinc-500">Daily Special</span>
        </h1>
        <p className="my-4  text-justify">
          Every day is an opportunity to enjoy your favorites at a discounted
          price. Explore our daily rotating specials and indulge in flavorful
          meals at a fraction of the cost.
        </p>

        <ul className=" relative flex flex-col gap-4">
          <li className="flex items-center gap-2">
            <IoIosCheckmarkCircle /> seasonal & locally sourced ingredients
          </li>
          <li className="flex items-center gap-2">
            <IoIosCheckmarkCircle />
            vegetarian & dietary-friendly options
          </li>
          <li className="flex items-center gap-2">
            <IoIosCheckmarkCircle />
            exquisite pairings & unique flavors
          </li>
          <div className="absolute right-0 ">
            <img
              class=" w-50 -rotate-10"
              src="https://i.ibb.co.com/ZR6vbK0L/pizza.png"
              alt="Pizza"
            />
          </div>
        </ul>
        <Link to={"/allFoods"}>
          <button className="details-button mt-5 flex items-center gap-2">
            Explore Menu
            <span className="text-white">
              <FaArrowRightLong size={20} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DailySpecialOffer;
