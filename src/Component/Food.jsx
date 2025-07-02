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
    <div className="max-w-md p-6 rounded-md shadow-md border border-amber-500/30 ">
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        src={foodImageLink}
        alt={newFoodName}
        className="object-cover object-center w-full rounded-md h-72"
      />
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
          className={` border  font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 hover:text-white active:scale-95 transition-all     ${theme =="light"? "text-yellow-400":"text-indigo-400" }`}
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Food;
