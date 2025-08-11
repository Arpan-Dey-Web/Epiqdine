import React, { use } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import { ThemeContext } from "./Context/ThemeContext";

const Table = ({ table }) => {
  const { theme } = use(ThemeContext);

  const {
    _id,
    newFoodName,
    foodCategory,
    // foodDescription,
    foodOrigin,
    foodQuantity,
    foodPrice,
    foodImageLink,
  } = table;
  // console.log(_id);
  return (
    <div className="max-w-md p-2 rounded-md border border-amber-500/30 shadow-md ">
      <img
        src={foodImageLink}
        alt={newFoodName}
        className="object-cover object-center w-full rounded-md h-72"
      />
      <div className="mt-6 mb-2 w-full mx-auto ">
        <span
          className={`block text-sm font-semibold tracking-widest capitalize text-center mb-6 border-b-2 border-gray-500   ${
            theme == "light" ? "text-yellow-400" : "text-indigo-400"
          }  `}
        >
          {newFoodName}
        </span>

        <div
          className={`flex justify-between items-center ${
            theme == "dark" ? "text-black" : " text-orange-400"
          } `}
        >
          <div>
            <h2 className="font-semibold  ">
              <div className="flex items-center ">
                <span className="">Price</span>

                <div className="badge  badge-primary ml-2 ">
                  {foodPrice} <FaBangladeshiTakaSign />
                </div>
              </div>
            </h2>

            <p className="flex mt-3">
              <span>Category: </span>
              <span className="badge  badge-warning text-sm text-black ml-2">
                {foodCategory}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-7">
        <Link to={`/Single_Food_Page/${_id}`}>
          <button
            className={`flex items-center gap-2 border   font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 hover:text-white hover:border-none active:scale-95 transition-all mb-10 group ${
              theme == "light"
                ? "text-yellow-400 border-yellow-400 "
                : "text-indigo-400 border-indigo-400"
            }`}
          >
            Food Details
            <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Table;
