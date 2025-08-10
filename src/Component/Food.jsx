// import React, { use } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ThemeContext } from "./Context/ThemeContext";
import TruncatedText from "./TruncatedText";
import { use } from "react";

const Food = ({ food }) => {
  const { theme } = use(ThemeContext);
  // console.log(theme);
  // _id,
  // newFoodName,
  // foodCategory,
  // foodDescription,
  // foodOrigin,
  // foodQuantity,
  // foodPrice,
  // foodImageLink,
  const { _id, newFoodName, foodDescription, foodImageLink } = food;
  // const description = foodDescription.slice("100")
  // console.log(description);

  return (
    <div data-aos="zoom-in" className="max-w-md p-6 rounded-md shadow-md ">
      <div className="rounded-full flex justify-center items-center  ">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src={foodImageLink}
          alt={newFoodName}
          className="rounded-full w-32 h-30"
        />
      </div>
      <div className="mt-6  w-full mx-auto ">
        <span
          className={`block text-sm font-semibold tracking-widest capitalize text-center  border-b-2 border-gray-300  ${
            theme == "light" ? "text-yellow-400" : "text-indigo-500"
          }`}
        >
          {newFoodName}
        </span>

        <div>
          <div>
            <span className="text-center h-[50px]">
              <TruncatedText text={foodDescription} maxLength={80} />
            </span>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link
          to={`/Single_Food_Page/${_id}`}
          className={` border  font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 hover:text-white active:scale-95 transition-all     ${
            theme == "light" ? "text-yellow-400" : "text-indigo-400"
          }`}
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Food;
