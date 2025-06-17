import React from "react";
import { Link } from "react-router";

const Table = ({ table }) => {
  const {
    _id,
    newFoodName,
    foodCategory,
    foodDescription,
    foodOrigin,
    foodQuantity,
    foodPrice,
    foodImageLink,
  } = table;

  return (
    <div className="max-w-md p-6 rounded-md border border-gray-300 shadow-md ">
      <img
        src={foodImageLink}
        alt={newFoodName}
        className="object-cover object-center w-full rounded-md h-72"
      />
      <div className="mt-6 mb-2 w-full mx-auto text-orange-400">
        <span className="block text-lg font-semibold tracking-widest uppercase text-center mb-6 border-b-2 border-gray-300">
          {newFoodName}
        </span>

        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-gray-400 tracking-wide">
              Date: {new Date().toLocaleDateString()}
            </h2>
            <p className="text-gray-400 text-md mt-1 capitalize">
              foodOrigin: {foodOrigin}
            </p>
            <p>Quantity: {foodQuantity}</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
            {foodCategory}
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link
          to={`/Single_Food_Page/${_id}`}
          className="inline-block px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          Food Details
        </Link>
      </div>
    </div>
  );
};

export default Table;
